import React from "react";
import { Outlet} from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


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
