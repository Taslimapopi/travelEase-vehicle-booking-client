import React, { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";

const Homelayout = () => {
  
  return (
    <div>
      <NavBar />
      <div className="min-h-screen relative">

        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Homelayout;
