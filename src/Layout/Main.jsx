import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";
import { Box } from "@mui/material";
const Main = () => {
  return (
    <Box>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </Box>
  );
};

export default Main;
