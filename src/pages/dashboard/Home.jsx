import React, { useEffect, useState } from "react";
import PageCont from "../../components/PageCont";
import StatsCard from "./StatsCard";
import Heading from "../../components/Heading";
import ApexChart from "./ApexChart";
import BackButton from "../../common/fields/BackButton";
// import TestPdf from "../../pdf/TestPdf";
import axios from "axios";

const Home = () => {
  const [dashboardData, setDashboardData] = useState({
    today: { patients: 0, invoices: 0 },
    weekly: { patients: 0, invoices: 0 },
    monthly: { patients: 0, invoices: 0 },
    monthlyRevenue: [],
    monthlyPatientsAdded: [],
  });

  useEffect(() => {
    axios
      .get("https://renepho.konceptsoftwaresolutions.com/api/renepho/dashboard/summary")
      .then((response) => {
        setDashboardData(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Extracting values for display
  const { today, weekly, monthly, monthlyRevenue, monthlyPatientsAdded } = dashboardData;

  // Initialize an array for 12 months (Jan - Dec) with default values of 0
  const monthsArray = Array(12).fill(0);

  // Mapping revenue and patients data correctly
  const formattedRevenueData = [...monthsArray];
  monthlyRevenue.forEach((item) => {
    if (item._id >= 1 && item._id <= 12) {
      formattedRevenueData[item._id - 1] = item.totalAmount;
    }
  });

  const formattedPatientsData = [...monthsArray];
  monthlyPatientsAdded.forEach((item) => {
    if (item._id >= 1 && item._id <= 12) {
      formattedPatientsData[item._id - 1] = item.totalPatients;
    }
  });

  // Chart data for monthly patients
  const chartData1 = [
    {
      name: "Monthly Patients Added",
      data: formattedPatientsData, // Fixed patient data
    },
  ];

  // Chart data for monthly revenue
  const chartData2 = [
    {
      name: "Monthly Revenue",
      data: formattedRevenueData, // Fixed revenue data
    },
  ];

  return (
    <PageCont>
      <div className="flex justify-start items-center gap-3">
        <BackButton />
        <Heading text="Admin Dashboard" />
        {/* <TestPdf /> */}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-3 my-5">
        <StatsCard title={"Today's Patients"} value={today.patients} growth={today.patients} />
        <StatsCard title={"Weekly Patients"} value={weekly.patients} growth={weekly.patients} />
        <StatsCard title={"Monthly Patients"} value={monthly.patients} growth={monthly.patients} />
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-10 mt-14">
        <ApexChart heading="Month on Month Patients" chartData={chartData1} />
        <ApexChart heading="Month on Month Revenue" chartData={chartData2} />
      </div>
    </PageCont>
  );
};

export default Home;
