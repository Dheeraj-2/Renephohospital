import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { tableStyle } from "../../constant/tableStyle";
import { Button, Skeleton, Popconfirm } from "antd";
import { Plus, Trash2, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";

const apiKey = import.meta.env.VITE_SERVER_URL;

const Ward = () => {
  const navigate = useNavigate();

  const { role, token } = useSelector((state) => state.auth);

  const [wards, setWards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWards();
  }, []);

  const fetchWards = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiKey}/api/renepho/ward/get/all`);
      setWards([...response.data.wards].reverse());
    } catch (error) {
      console.error("Error fetching wards:", error);
      toast.error("Failed to fetch ward data!");
    } finally {
      setLoading(false);
    }
  };

  const handleWard = () => {
    navigate(`/${role}/addWard`);
  };

  const handleDelete = async (id) => {
    try {
      console.log(id);
      const response = await axios.post(`${apiKey}/api/renepho/ward/delete/`, { "_id": id });

      if (response.status === 200) {
        toast.success("Ward deleted successfully!");
        setWards((prevWards) => prevWards.filter((ward) => ward._id !== id));
      }
    } catch (error) {
      console.error("Error deleting ward:", error);
      toast.error("Failed to delete ward!");
    }
  };

  const columns = [
    {
      name: "Ward Name",
      selector: (row) => row.wardName,
      sortable: true,
    },
    {
      name: "Charges",
      selector: (row) => `${row.charges}`,
      sortable: true,
    },
    {
      name: "IP Number",
      selector: (row) => row.ipAddress,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <Popconfirm
          title="Are you sure to delete this ward?"
          onConfirm={() => handleDelete(row._id)}
          okText="Yes"
          cancelText="No"
        >
          <Button
            type="danger"
            icon={<Trash2 />}
            size="small"
            className="text-red-600"
          >
            Delete
          </Button>
        </Popconfirm>
      ),
    },
  ];

  const columns1 = [
    {
      name: "Ward Name",
      selector: (row) => row.wardName,
      sortable: true,
    },
    {
      name: "Charges",
      selector: (row) => `${row.charges}`,
      sortable: true,
    },
    {
      name: "IP Number",
      selector: (row) => row.ipAddress,
      sortable: true,
    },
  ];


  return (
    <div className="p-3">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Ward Information</h2>
        <Button
          type="button"
          onClick={handleWard}
          className="black text-white py-[8px] px-[16px] font-bold text-md rounded-md flex items-center justify-center bg-gradient-to-r from-[#29A6E0] to-[#2E3494]"
        >
          <Plus className="pr-1" />
          Add Ward
        </Button>
      </div>

      {loading ? (
        <Skeleton active />
      ) : (
        <DataTable
          columns={role === 'user' ? columns1 : columns}
          data={wards}
          customStyles={tableStyle}
          highlightOnHover
          striped
          responsive
          pagination
        />
      )}
    </div>
  );
};

export default Ward;