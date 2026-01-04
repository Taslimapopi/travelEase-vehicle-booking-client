import React, { useState } from "react";
import VehicleCard from "../components/VehicleCard";
import useAxios from "../hooks/useAxios";
import Banner from "../components/Banner";
import { Link } from "react-router";
import AboutTravelEase from "../components/AboutTravelEase";
import ReviewSection from "../components/ReviewSection";
import LoadingSpinner from "../components/LoadingSpinner";
import Nav from "../components/Nav";
import FAQ from "../components/FAQ";
import Newsletter from "../components/Newsletter";
import BecomeVehicleOwner from "../components/BecomeVehicleOwner";

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
        <Banner></Banner>
      </div>
      <div>
        
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Explore Our Top 8 Vehicles
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {
          loading && <LoadingSpinner/>
        }
        {vehicles.map((vehicle) => (
          <VehicleCard vehicle={vehicle}></VehicleCard>
        ))}
      </div>
      <AboutTravelEase></AboutTravelEase>
      <ReviewSection></ReviewSection>
      <BecomeVehicleOwner></BecomeVehicleOwner>
      
      <FAQ></FAQ>
      <Newsletter></Newsletter>
      
    </div>
  );
};

export default Home;
