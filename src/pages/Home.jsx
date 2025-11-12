import React, { useState } from "react";
import VehicleCard from "../components/VehicleCard";
import useAxios from "../hooks/useAxios";
import Banner from "../components/Banner";
import { Link } from "react-router";
import AboutTravelEase from "../components/AboutTravelEase";
import ReviewSection from "../components/ReviewSection";

const Home = () => {
  const useAxiosHook = useAxios();
  const [vehicles, setVehicles] = useState([]);

  useAxiosHook("/vehicles").then((data) => {
    setVehicles(data.data);
  });

  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Explore Our Top 6 Vehicles
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {vehicles.map((vehicle) => (
          <VehicleCard vehicle={vehicle}></VehicleCard>
        ))}
      </div>
      <div className="mx-auto flex justify-end my-5">
        <Link className="btn_common">All Vehicles</Link>
      </div>
      <AboutTravelEase></AboutTravelEase>
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default Home;
