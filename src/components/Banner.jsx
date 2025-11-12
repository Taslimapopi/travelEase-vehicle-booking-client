import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import useAxios from "../hooks/useAxios";

const Banner = () => {
  const axiosInstance = useAxios();
  const [vehicles, setVehicles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // slide direction

  // Fetch vehicles
  useEffect(() => {
    axiosInstance("/all-vehicles")
      .then((res) => setVehicles(res.data))
      .catch((err) => console.error(err));
  }, [axiosInstance]);

  // Auto slide every 10 sec
  useEffect(() => {
    if (!vehicles.length) return;
    const timer = setInterval(() => {
      setDirection(1); // always slide left
      setCurrentIndex((prev) => (prev + 1) % vehicles.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [vehicles]);

  if (!vehicles.length) {
    return (
      <div className="flex items-center justify-center h-[400px] bg-gray-100 text-gray-600 text-lg">
        Loading vehicles...
      </div>
    );
  }

  const currentVehicle = vehicles[currentIndex];

  // Animation variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: (direction) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.8, ease: "easeIn" },
    }),
  };

  return (
    <div className="relative w-full h-[550px] overflow-hidden rounded-2xl shadow-xl bg-gray-900">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentVehicle._id}
          className="absolute inset-0 w-full h-full"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          {/* Background Image */}
          <img
            src={currentVehicle.coverImage}
            alt={currentVehicle.vehicleName}
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>

          {/* Text & Buttons */}
          <div className="absolute bottom-16 left-10 text-white max-w-lg">
            <motion.h2
              className="text-5xl font-extrabold mb-3 drop-shadow-lg"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {currentVehicle.vehicleName}
            </motion.h2>

            <motion.p
              className="text-lg text-gray-200 mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {currentVehicle.description?.slice(0, 100)}...
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-4"
            >
              <Link
                to={`/vehicle-details/${currentVehicle._id}`}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                Grab the Wheel
              </Link>

              <Link
                to="/all-vehicles"
                className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg backdrop-blur-md transition-all"
              >
                View All Vehicles →
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 right-6 flex space-x-2">
        {vehicles.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/40"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
