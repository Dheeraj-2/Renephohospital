import React, { useEffect, useState } from "react";
import PageCont from "../../components/PageCont";
import BackButton from "../../common/fields/BackButton";
import Heading from "../../components/Heading";
import DataTable from "react-data-table-component";
import { allPatientsColumn } from "../../constant/tableColumns";
import { tableStyle } from "../../constant/tableStyle";
import { Button, Input } from "@material-tailwind/react";
import { Plus, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { Skeleton } from "antd";

const apiKey = import.meta.env.VITE_SERVER_URL;

const AllPatients = () => {
  const { role } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilter, setShowFilter] = useState(false);

  const [filters, setFilters] = useState({
    name: "",
    email: "",
    mobile: "",
    patientId: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiKey}/api/renepho/patient/all`);
        setData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error("Error fetching patients data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${role}/addPatient`);
  };

  const handleRowClick = (row) => {
    navigate(`/${role}/editPatient`, { state: { patient: row } });
  };

  const toggleFilter = () => {
    setShowFilter((prev) => !prev);
  };

  const handleSearch = () => {
    let filtered = [...data];

    if (filters.name) {
      filtered = filtered.filter((patient) =>
        patient.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }
    if (filters.email) {
      filtered = filtered.filter((patient) =>
        patient.email.toLowerCase().includes(filters.email.toLowerCase())
      );
    }
    if (filters.mobile) {
      filtered = filtered.filter((patient) =>
        patient.mobile.includes(filters.mobile)
      );
    }
    if (filters.patientId) {
      filtered = filtered.filter((patient) =>
        patient.patientId.toString().includes(filters.patientId)
      );
    }
    if (filters.startDate && filters.endDate) {
      const start = new Date(filters.startDate).setHours(0, 0, 0, 0);
      const end = new Date(filters.endDate).setHours(23, 59, 59, 999);

      filtered = filtered.filter((patient) => {
        const patientDate = new Date(patient.createdAt).getTime();
        return patientDate >= start && patientDate <= end;
      });
    }

    setFilteredData(filtered);
  };

  const clearFilters = () => {
    setFilters({
      name: "",
      email: "",
      mobile: "",
      patientId: "",
      startDate: "",
      endDate: "",
    });
    setFilteredData(data);
  };

  return (
    
    <PageCont>
      <div className="flex justify-between ">
        <div className="flex justify-start items-center gap-3">
          <BackButton />
          <Heading text="All Patients" />
        </div>
        <div className="flex gap-5 ">
          <Button
            type="button"
            variant="filled"
            onClick={handleNavigate}
            className="black text-white py-[8px] px-[16px] font-bold text-md rounded-md flex items-center justify-center bg-gradient-to-r from-[#29A6E0] to-[#2E3494]"
          >
            <Plus className="pr-1" />
            Add Patient
          </Button>
          <Button
            type="button"
            variant="filled"
            onClick={toggleFilter}
            className="black text-white py-[8px] px-[16px] font-bold text-md rounded-md flex items-center justify-center bg-gradient-to-r from-[#29A6E0] to-[#2E3494]"
          >
            <Filter className="pr-1" />
            Filter
          </Button>
        </div>
      </div>

      {showFilter && (
        <div className="bg-[#f2f2f2] p-4 absolute right-6 top-[84px] z-30 flex flex-col gap-4 w-[400px]">
          <Input
            label="Search by Name"
            value={filters.name}
            onChange={(e) =>
              setFilters({ ...filters, name: e.target.value })}
            className="mb-2 bg-white" />
          <Input
            label="Search by Email"
            value={filters.email}
            onChange={(e) =>
              setFilters({ ...filters, email: e.target.value })}
            className="mb-2 bg-white" />
          <Input
            label="Search by Mobile"
            value={filters.mobile}
            onChange={(e) =>
              setFilters({ ...filters, mobile: e.target.value })}
            className="mb-2 bg-white" />
          <Input
            label="Search by Patient ID"
            value={filters.patientId}
            onChange={(e) =>
              setFilters({ ...filters, patientId: e.target.value })}
            className="mb-2 bg-white" />
          <div className="flex justify-between mt-4">
            <Button
              type="button"
              variant="filled"
              onClick={handleSearch}
              className="bg-green-500 text-white px-4 py-2 rounded-md">Apply Filters</Button>
            <Button
              type="button"
              variant="filled"
              onClick={clearFilters}
              className="bg-red-500 text-white px-4 py-2 rounded-md">Clear Filters</Button>
          </div>
        </div>
      )}

      <div className="my-5">
        {loading ? <Skeleton active paragraph={{ rows: 10 }} /> :
          <DataTable columns={allPatientsColumn}
            customStyles={tableStyle}
            onRowClicked={handleRowClick}
            data={[...filteredData].reverse()}
            highlightOnHover
            striped
            responsive
            pagination
            paginationPerPage={10}
            paginationRowsPerPageOptions={[5, 10, 15, 20]}
          />}
      </div>
    </PageCont>

  );
};

export default AllPatients;
