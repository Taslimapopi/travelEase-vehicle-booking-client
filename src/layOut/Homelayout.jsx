import React, { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";

const Homelayout = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (navigation.state === "loading") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [navigation.state]);

  return (
    <div>
      <NavBar />
      <div className="min-h-screen relative">
        
        {loading && (
          <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <LoadingSpinner />
          </div>
        )}

        <Outlet />
      </div>
      <Footer />
    </div>
  );
};



export default Homelayout;
