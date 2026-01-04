import React from "react";
import { Outlet} from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Nav from "../components/Nav";


const Homelayout = () => {
  
  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      
      <header className="w-full z-50">
        <Nav />
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 md:px-6 py-20">
        
        <Outlet />
        
      </main>

      {/* Footer */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default Homelayout;
