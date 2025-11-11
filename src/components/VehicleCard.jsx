import React from "react";
import { Link } from "react-router";



const VehicleCard = ({ vehicle }) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 
                flex flex-col justify-between 
                h-full w-full p-4 hover:shadow-2xl transition-all duration-300">
      
      {/* Vehicle Name on top */}
      <div className="bg-gray-100 py-3 text-center">
        <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">
          {vehicle.vehicleName}
        </h2>
      </div>

      {/* Image */}
      <img
        src={vehicle.coverImage}
        alt={vehicle.vehicleName}
        className="w-full h-56 object-cover rounded-lg"
      />

      {/* Details */}
      <div className="p-5 text-left">
        <ul className="text-sm text-gray-700 space-y-1">
          <li>
            <strong>Owner:</strong> {vehicle.owner}
          </li>
          <li>
            <strong>Category:</strong> {vehicle.category}
          </li>
          <li>
            <strong>Seat Capacity:</strong> {vehicle.seatCapacity}
          </li>
          <li>
            <strong>Price/Day:</strong> ${vehicle.pricePerDay}
          </li>
          <li>
            <strong>Location:</strong> {vehicle.location}
          </li>
          <li>
            <strong>Availability:</strong> {vehicle.availability}
          </li>
          <li>
            <strong>Email:</strong> {vehicle.userEmail}
          </li>
        </ul>

        <p className="text-gray-600 text-sm mt-3">
          {vehicle.description.slice(0, 90)}...
        </p>

        <div className="mt-4 text-center">
                <Link
            to={`/vehicle-details/${vehicle._id}`}
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            View Details
          </Link>
        
          
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
