import React from "react";
import { useRoutes } from "react-router-dom";
import HomeScreen from "../Landing/HomeScreen";
import DashboardRoutes from "./Routes.Dashboard";

const AllRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <HomeScreen />,
    },
  ]);
  return element;
};

export default AllRoutes;
