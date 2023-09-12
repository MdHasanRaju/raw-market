import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";
const Main = () => {

  const loction = useLocation()
  console.log(loction)

  const noNavbarFooter = loction.pathname.includes('login')
const  navbarFooter = loction.pathname.includes('register')  
  return (
    <div>
    {noNavbarFooter || navbarFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
    {noNavbarFooter || navbarFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
