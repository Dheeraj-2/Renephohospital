import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { tableStyle } from "../../constant/tableStyle";
import axios from "axios";
import { Button, Modal, Form, Select, Input, Spin } from "antd";
import { Text } from "lucide-react";
import BillPDF from "../../pdf/BillPDF";
import { pdf } from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
const apiKey = import.meta.env.VITE_SERVER_URL;
import date from 'date-and-time';


const BillGenerate = () => {
    const userName = useSelector((state) => state?.user?.userData?.name);
    const { role } = useSelector((state) => state?.auth);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [form] = Form.useForm();
    const [ward, SetWard] = useState();

    const [pdfForm, setPdfFrom] = useState({
        status: '',
        description: "",
        amount: "",
        invoiceID: "",
        response: ''
    });

    const [modalLoading, setModalLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiKey}/api/renepho/invoice/get/all`, {
                    headers: { 'Content-Type': 'application/json' }
                });

                const invoices = response.data.invoices.map(invoice => ({
                    _id: invoice._id,
                    receiptNo: invoice.receiptNo,
                    patientID: {
                        name: invoice.patientID.name,
                        email: invoice.patientID.email,
                    },
                    amount: invoice.amount,
                    description: invoice.description,
                    status: invoice.status,
                    date: invoice.date,
                }));

                setData(invoices);
            } catch (err) {
                console.error("Error fetching data:", err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const fetchPatients = async () => {
        try {
            const response = await axios.get(`${apiKey}/api/renepho/patient/all`);
            setPatients(response.data);
        } catch (err) {
            console.error("Error fetching patients:", err.message);
        }
    };

    const columns = [
        { name: 'Receipt No', selector: row => row.receiptNo, sortable: true },
        { name: 'Patient Name', selector: row => row.patientID.name, sortable: true },
        { name: 'Amount', selector: row => row.amount, sortable: true, right: true },
        { name: 'Description', selector: row => row.description },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true,
            cell: (row) => (
                <Select
                    defaultValue={row.status}
                    style={{ width: 120 }}
                    onChange={async (value) => {
                        try {
                            toast.success("update")
                        } catch (error) {
                            console.error("Error updating status:", error);
                            toast.error("Failed to update status");
                        }
                    }}
                >
                    <Select.Option value="pending">Pending</Select.Option>
                    <Select.Option value="paid">Paid</Select.Option>
                </Select>
            ),
        },
        { name: 'Date', selector: row => new Date(row.date).toLocaleDateString(), sortable: true },
        {
            name: 'Download PDF',
            button: true,
            cell: (row) => (
                <Button
                    type="link"
                    onClick={() => HandlePdfDownload(row._id)}
                >
                    Download PDF
                </Button>
            ),
        },
    ];

    const handleGenerateBill = async () => {
        setIsModalOpen(true);  // Open modal immediately
        setModalLoading(true);  // Start loading indicator
        await fetchPatients();  // Fetch patient data after modal opens
        setModalLoading(false);  // Stop loading indicator
    };

    useEffect(() => {
        if (isModalOpen) {
            fetchPatients();  // Fetch patients when modal opens
        }
    }, [isModalOpen]);

    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields();  // Reset form fields
        setSelectedPatient(null);  // Reset selected patient
        setPdfFrom({ status: '', description: "", amount: "", invoiceID: "", response: '' });  // Reset PDF form data
    };

    const handlePatientChange = (patientId) => {
        const selected = patients.find(patient => patient.patientID === patientId);
        setSelectedPatient(selected);
    };

    const handleFormSubmit = async (values) => {
        setModalLoading(true);
        const { status, description, amount } = values;
        try {
            const response = await axios.post(`${apiKey}/api/renepho/invoice/receiptNo/generate`, {
                "patientID": selectedPatient._id
            });
            setPdfFrom({
                status,
                description,
                amount,
                response: response.data.savedInvoice
            });
            setIsModalOpen(true);
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Error generating the invoice.");
        } finally {
            setModalLoading(false);
        }
    };

    useEffect(() => {
        HandlePrint(pdfForm);
    }, [pdfForm]);

    const findWardIP = ward?.wards?.filter(wardItem => wardItem?.wardName === selectedPatient?.ward);
    const ipAddress = findWardIP?.length > 0 ? findWardIP[0]?.ipAddress : undefined;
    const charges = findWardIP?.length > 0 ? findWardIP[0]?.charges : undefined;


    const HandlePrint = async (values) => {
        const { receiptNo, _id } = values.response || {};
        if (!receiptNo) {
            console.error("Receipt No is missing!");
            return;
        }
        try {
            const { amount, description, status } = values;

            const numberToWords = (num) => {
                if (num === 0) return "Zero Only";

                const belowTwenty = [
                    "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
                    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
                    "Seventeen", "Eighteen", "Nineteen"
                ];
                const tens = [
                    "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
                ];
                const thousandUnits = ["", "Thousand", "Million", "Billion", "Trillion"];

                const convertChunk = (n) => {
                    let str = "";
                    if (n >= 100) {
                        str += belowTwenty[Math.floor(n / 100)] + " Hundred ";
                        n %= 100;
                    }
                    if (n >= 20) {
                        str += tens[Math.floor(n / 10)] + " ";
                        n %= 10;
                    }
                    if (n > 0) {
                        str += belowTwenty[n] + " ";
                    }
                    return str.trim();
                };

                let result = "";
                let unitIndex = 0;

                while (num > 0) {
                    let chunk = num % 1000;
                    if (chunk !== 0) {
                        result = convertChunk(chunk) + (thousandUnits[unitIndex] ? " " + thousandUnits[unitIndex] : "") + " " + result;
                    }
                    num = Math.floor(num / 1000);
                    unitIndex++;
                }

                return `${result.trim()} Only`;
            };


            const now = new Date();
            const formattedDate = date.format(now, 'D-MMM-YY');
            const formattedTime = date.format(now, 'h:mm A');

            // Generate PDF
            const blob = await pdf(
                <BillPDF
                    patientName={selectedPatient?.name}
                    ipNumber={ipAddress}
                    date={formattedDate}
                    time={formattedTime}
                    invoiceNO={receiptNo}
                    amount={amount}
                    receivedFrom={userName}
                    textAmount={numberToWords(amount)}
                />
            ).toBlob();

            // Create FormData and append the PDF file along with other data
            const formData = new FormData();
            formData.append("file", blob, "bill.pdf");
            formData.append("invoiceID", _id);
            formData.append("amount", amount);
            formData.append("description", description);
            formData.append("status", status);

            // Create the download link
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "bill.pdf";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);

            try {
                const response = await axios.post(`${apiKey}/api/renepho/invoice/update`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

                if (response.status !== 201) {
                    throw new Error("API call failed");
                }

            } catch (apiError) {
                console.error("Error calling API:", apiError);
                toast.error("Failed to call the API.");
            }
            setIsModalOpen(false);
        } catch (error) {
            console.error("Error generating PDF:", error);
            toast.error("Failed to generate the PDF.");
        }
    };

    const HandlePdfDownload = async (id) => {
        try {
            const response = await axios.get(`${apiKey}/api/renepho/invoice/getInvoiceFile/${id}`, {
                responseType: 'blob'
            });
            const blob = new Blob([response.data], { type: "application/pdf" });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `invoice.pdf`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error fetching PDF:", error);
            toast.error("Failed to download the invoice.");
        }
    };


    const HandleWardPrice = async () => {
        try {
            const response = await axios.get(`${apiKey}/api/renepho/ward/get/all`);
            SetWard(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        HandleWardPrice();
    }, [])

    return (
        <div className="p-5">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold mb-4">Generate Invoice</h1>
                <Button
                    type="primary"
                    onClick={handleGenerateBill}
                    className="black text-white py-[10px] px-[16px] font-bold text-md rounded-md flex items-center justify-center bg-gradient-to-r from-[#29A6E0] to-[#2E3494]"
                >
                    <Text className="pr-1" />
                    Generate Invoice
                </Button>
            </div>

            {loading ? (
                <div className="text-center">Loading...</div>
            ) : (
                <DataTable
                    columns={columns}
                    data={[...data].reverse()}
                    customStyles={tableStyle}
                    pagination
                    highlightOnHover
                    striped
                    responsive
                    paginationPerPage={10}
                    paginationRowsPerPageOptions={[5, 10, 15, 20]}
                />
            )}

            <Modal
                title="Generate Invoice"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <Spin spinning={modalLoading} tip="Processing..." >
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={handleFormSubmit}
                    >
                        <div className="flex gap-5">
                            {/* Patient Name Dropdown */}
                            <Form.Item name="patientName" className="flex-1">
                                <p className="font-bold mb-2">Patient Name</p>
                                <Select
                                    placeholder="Select a patient"
                                    onChange={handlePatientChange}
                                    className="w-full"
                                >
                                    {[...patients].reverse().map(patient => (
                                        <Select.Option key={patient.patientID} value={patient.patientID}>
                                            {patient.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            {/* Ward (Disabled Input) */}
                            <div className="flex-1">
                                <p className="font-bold mb-2">Ward</p>
                                <Form.Item>
                                    <Input value={selectedPatient?.ward ?? 'Not Available'} disabled className="w-full" />
                                </Form.Item>
                            </div>
                        </div>

                        {/* Status Select (Pending/Paid) */}
                        <Form.Item name="status" label="Status" rules={[{ required: true, message: 'Please select a status' }]}>
                            <Select placeholder="Select status" className="w-full">
                                <Select.Option value="pending">Pending</Select.Option>
                                <Select.Option value="paid">Paid</Select.Option>
                            </Select>
                        </Form.Item>

                        {/* Description */}
                        <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter a description' }]}>
                            <Input.TextArea rows={3} placeholder="Enter description" />
                        </Form.Item>

                        {/* Amount */}
                        <Form.Item name="amount" label="Amount" rules={[{ required: true, message: 'Please enter the amount' }]}>
                            {/* here show price ward based on seletedc ward Map ward then show also eadit ward price as well make it righht  */}
                            <Input type="number" defaultValue={charges} value={charges} placeholder="Enter amount" />
                        </Form.Item>

                        <div className="flex justify-end gap-3 mt-4">
                            <Button onClick={handleCancel}>Cancel</Button>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </div>
                    </Form>
                </Spin>
            </Modal>
        </div>
    );
};

export default BillGenerate;