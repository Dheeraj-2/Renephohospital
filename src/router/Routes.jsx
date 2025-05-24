import React, { useMemo } from "react";
import Home from "../pages/dashboard/Home";
import About from "../pages/allUsers/About";
import DashLayout from "../components/layout/DashLayout";
import { Navigate, useRoutes } from "react-router-dom";
import Test from "../pages/Test";
import Login from "../pages/Login";
import AllUsers from "../pages/allUsers/AllUsers";
import AddUser from "../pages/allUsers/AddUser";
import EditUser from "../pages/allUsers/EditUser";
import AllPatients from "../pages/patients/AllPatients";
import AddPatient from "../pages/patients/AddPatient";
import EditPatient from "../pages/patients/EditPatient";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./ProtectedRoutes";
import Ward from "../pages/ward/Ward";
import AddWard from "../pages/ward/addWard";
import BillGenerate from "../pages/billGenerate/billGenerate";
import BillPDF from "../pdf/BillPDF";

import HomePage from "../pages/website/HomePage";

const Routes = () => {
  const { isAuthenticated, role, token } = useSelector((state) => state.auth);

  // Set the default route behavior
  const destinationRoute = useMemo(() => {
    if (isAuthenticated) {
      return `/${role}/dashboard`; // Authenticated users go to their dashboard
    } else {
      return "/homepage"; // Default to HomePage when not authenticated
    }
  }, [isAuthenticated, token, role]);

  const routes = [
    {
      path: "/",
      element: isAuthenticated ? (
        <Navigate to={destinationRoute} />
      ) : (
        <HomePage />
      ), // Default to HomePage when not authenticated
    },
    {
      path: "*",
      element: <Navigate to={"/"} />,
    },
    {
      path: "/homepage", // This route is for when the user is not authenticated
      element: <HomePage />,
    },
    {
      path: "/login",
      element: (
        <ProtectedRoutes isAuthenticated={!isAuthenticated} redirect={"/"}>
          <Login />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/",
      element: (
        <ProtectedRoutes isAuthenticated={isAuthenticated} redirect={"/login"}>
          <DashLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          path: "/:type/dashboard",
          element: <Home />,
        },
        {
          path: role === "superAdmin" ? "/:type/allUsers" : null,
          element: <AllUsers />,
        },
        { path: "/:type/addUser", element: <AddUser /> },
        {
          path: role === "superAdmin" ? "/:type/editUser" : null,
          element: <EditUser />,
        },
        { path: "/:type/allPatients", element: <AllPatients /> },
        { path: "/:type/addPatient", element: <AddPatient /> },
        { path: "/:type/editPatient", element: <EditPatient /> },
        { path: "/:type/ward", element: <Ward /> },
        { path: "/:type/addWard", element: <AddWard /> },
        { path: "/:type/billGenerate", element: <BillGenerate /> },
        // { path: "/bill", element: <BillPDF /> },
        { path: "*", element: <Navigate to="/" replace /> },
      ],
    },
  ];

  const element = useRoutes(routes);
  return element;
};

export default Routes;
