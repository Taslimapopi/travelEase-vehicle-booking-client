import React, { useState } from "react";
import VehicleCard from "../components/VehicleCard";
import useAxios from "../hooks/useAxios";
import Banner from "../components/Banner";
import { Link } from "react-router";
import AboutTravelEase from "../components/AboutTravelEase";
import ReviewSection from "../components/ReviewSection";
import LoadingSpinner from "../components/LoadingSpinner";
import Nav from "../components/Nav";

const Home = () => {
  const useAxiosHook = useAxios();
  const [vehicles, setVehicles] = useState([]);
  const [loading,setLoading] = useState(true)

  useAxiosHook("/vehicles").then((data) => {
    setVehicles(data.data);
    setLoading(false)
  });

  return (
    <div>
      <div>
        {/* <Nav></Nav> */}
        <Banner></Banner>
      </div>
      <div>
        
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Explore Our Top 6 Vehicles
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {
          loading && <LoadingSpinner/>
        }
        {vehicles.map((vehicle) => (
          <VehicleCard vehicle={vehicle}></VehicleCard>
        ))}
      </div>
      <AboutTravelEase></AboutTravelEase>
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default Home;
