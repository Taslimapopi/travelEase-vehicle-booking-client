import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";

import useAxios from "../hooks/useAxios";
import { Link } from "react-router";

const Banner = () => {
  const axiosInstance = useAxios();
  const [vehicles, setVehicles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [time, setTime] = useState(new Date());

  // Fetch all vehicles from API
  useEffect(() => {
    axiosInstance("/all-vehicles")
      .then((res) => setVehicles(res.data))
      .catch((err) => console.error(err));
  }, [axiosInstance]);

  // Auto slide every 5 seconds
  useEffect(() => {
    if (!vehicles.length) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % vehicles.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [vehicles]);

  // Live clock update
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!vehicles.length) {
    return (
      <div className="flex items-center justify-center h-[400px] bg-gray-100 text-gray-600 text-lg">
        Loading vehicles...
      </div>
    );
  }

  const currentVehicle = vehicles[currentIndex];

  return (
    <div className="relative w-full h-[550px] overflow-hidden rounded-2xl shadow-xl bg-gray-900">
      <AnimatePresence>
        <motion.div
          key={currentVehicle._id}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Background Image */}
          <img
            src={currentVehicle.coverImage}
            alt={currentVehicle.vehicleName}
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          {/* Text & Button */}
          <div className="absolute bottom-16 left-10 text-white max-w-lg">
            <motion.h2
              className="text-5xl font-extrabold mb-3 drop-shadow-lg"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {currentVehicle.vehicleName}
            </motion.h2>

            <motion.p
              className="text-lg text-gray-200 mb-6"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {currentVehicle.description?.slice(0, 100)}...
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                to={`/vehicle-details/${currentVehicle._id}`}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                Book Now
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Watch Section (Date + Time) */}
      <div className="absolute top-8 right-8 bg-white/10 border border-white/20 text-white px-5 py-3 rounded-xl backdrop-blur-md shadow-md">
        <p className="text-sm text-gray-300">
          {format(time, "EEEE, dd MMM yyyy")}
        </p>
        <p className="text-2xl font-semibold tracking-wider">
          {format(time, "hh:mm:ss a")}
        </p>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 right-6 flex space-x-2">
        {vehicles.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/40"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
