import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const VehicleDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [vehicle,setVehicle] = useState({})

  useEffect(()=>{
    fetch(`http://localhost:3000/vehicles/${id}`)
    .then(res=>res.json())
    .then(data=>setVehicle(data))
  },[])

  const handleDelete = () =>{
    fetch(`http://localhost:3000/vehicles/${vehicle._id}`,{
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
          },
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error))
  }
  return (
     <div className="p-5 flex justify-center ">
      <div className="card lg:card-side bg-base-100 shadow-xl w-full max-w-5xl">
        {/* ✅ Image section */}
        <figure className="flex-shrink-0 w-full lg:w-[45%] h-[350px] pt-7 ">
          <img
            src={vehicle.coverImage}
            alt="Album"
            className="object-cover w-full h-full rounded-l-xl"
          />
        </figure>

        {/* ✅ Content section */}
        <div className="card-body w-full lg:w-[55%]">
          <div className="bg-gray-100 py-3 text-center rounded">
            <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">
              {vehicle.vehicleName}
            </h2>
          </div>

          <div className="p-2 text-left overflow-y-auto ">
            <ul className="text-sm text-gray-700 space-y-1">
              <li><strong>Owner:</strong> {vehicle.owner}</li>
              <li><strong>Category:</strong> {vehicle.category}</li>
              <li><strong>Seat Capacity:</strong> {vehicle.seatCapacity}</li>
              <li><strong>Price/Day:</strong> ${vehicle.pricePerDay}</li>
              <li><strong>Location:</strong> {vehicle.location}</li>
              <li><strong>Availability:</strong> {vehicle.availability}</li>
              <li><strong>Email:</strong> {vehicle.userEmail}</li>
            </ul>

            <p className="text-gray-600 text-sm mt-3">{vehicle.detailsDesc}</p>
          </div>

          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary">Book Now</button>
            <Link to={`/update-vehicles/${vehicle._id}`} className="btn btn-accent">Update</Link>
            <button onClick={handleDelete} className="btn btn-outline">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
