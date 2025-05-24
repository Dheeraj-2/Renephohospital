import React, { useState, useEffect } from "react";
import PageCont from "../../components/PageCont";
import Heading from "../../components/Heading";
import DataTable from "react-data-table-component";
import { tableStyle } from "../../constant/tableStyle";
import { columns } from "../../constant/tableColumns";
import { Button } from "@material-tailwind/react";
import { Plus, ChevronsLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { Skeleton } from "antd"; // Import Skeleton from Ant Design

const apiKey = import.meta.env.VITE_SERVER_URL;

const AllUsers = () => {  
  const navigate = useNavigate();
  const { role } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiKey}/api/renepho/user/get`, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const reversedData = [...response.data.allUser].reverse();
        
        setData(reversedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  const handleNavigate = () => {
    navigate(`/${role}/addUser`);
  };

  const handleRowClick = (row) => {
    navigate(`/${role}/editUser`, { state: { user: row } });
  };

  return (
    <PageCont>
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-1 rounded-lg back-btn md:block bg-[#29A6E0]"
          >
            <ChevronsLeft color="white" width={22} />
          </button>
          <Heading text="All Users" />
        </div>
        <Button
          type="submit"
          variant="filled"
          onClick={handleNavigate}
          className="black text-white py-[8px] px-[16px] font-bold text-md rounded-md flex items-center justify-center bg-gradient-to-r from-[#29A6E0] to-[#2E3494]"
        >
          <Plus className="pr-1" />
          Add User
        </Button>
      </div>

      <div className="my-5">
        {loading ? (
          // Display Skeleton while loading
          <Skeleton active paragraph={{ rows: 8 }} />
        ) : error ? (
          // Show error message if API fails
          <div className="text-red-500 text-center">{error}</div>
        ) : (
          // Show DataTable when data is available
          <DataTable
            columns={columns}
            data={data}
            customStyles={tableStyle}
            onRowClicked={handleRowClick}
            pagination
            highlightOnHover
            striped
            responsive
            paginationPerPage={10}
            paginationRowsPerPageOptions={[5, 10, 15, 20]}
          />
        )}
      </div>
    </PageCont>
  );
};

export default AllUsers;
