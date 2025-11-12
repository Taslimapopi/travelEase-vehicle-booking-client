import React, { useEffect, useState } from "react";
import VehicleCard from "../components/VehicleCard";
import useAxios from "../hooks/useAxios";
import LoadingSpinner from "../components/LoadingSpinner";

const AllVehicles = () => {
  const axiosHook = useAxios();
  const [vehicles, setVehicles] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(true)

  //   useAxiosHook("/all-vehicles").then((data) => {
  //     setVehicles(data.data);
  //   });

  // 🔁 fetch vehicles when sort order changes
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axiosHook(`/all-vehicles?sort=${sortOrder}`);
        setVehicles(response.data);
        setLoading(false)
      } catch (error) {
        console.error("❌ Error fetching vehicles:", error);
      }
    };

    fetchVehicles(); 
  }, [sortOrder, axiosHook]);

  return (
    <div>
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-2 mt-4">
          Adventure Awaits — Choose Your Ride
        </h1>
      {/* Sorting buttons */}

      <div className="flex justify-end mb-6 bg-white shadow-md rounded-lg px-6 py-3 space-x-8">
        <label className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition">
          <input
            type="radio"
            name="sort"
            value="asc"
            checked={sortOrder === "asc"}
            onChange={(e) => setSortOrder(e.target.value)}
            className="appearance-none w-5 h-5 border-2 border-gray-400 rounded-full checked:border-blue-600 checked:bg-blue-600 transition"
          />
          <span className="font-medium">Price ↑ (Low → High)</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer hover:text-green-600 transition">
          <input
            type="radio"
            name="sort"
            value="dsc"
            checked={sortOrder === "dsc"}
            onChange={(e) => setSortOrder(e.target.value)}
            className="appearance-none w-5 h-5 border-2 border-gray-400 rounded-full checked:border-green-600 checked:bg-green-600 transition"
          />
          <span className="font-medium">Price ↓ (High → Low)</span>
        </label>
      </div>
      {
        loading && <LoadingSpinner/>
      }
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 place-items-stretch">
        {vehicles.map((vehicle) => (
          <VehicleCard vehicle={vehicle}></VehicleCard>
        ))}
      </div>
    </div>
  );
};

export default AllVehicles;
