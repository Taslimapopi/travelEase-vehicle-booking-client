import React, { use, useState } from "react";
import { AuthContext } from "../provider/context";
import { useEffect } from "react";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyVehicles = () => {
//   const { user } = use(AuthContext);
  const {user} = useAuth()
  const [myVehicles, setMyVehicles] = useState([]);
  const axiosSecure = useAxiosSecure()
  useEffect(() => {
    // fetch(`http://localhost:3000/my-vehicles?email=${user.email}`,{
    //     headers:{
    //         authorization: `Bearer ${user.accessToken}`
    //     }
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setMyVehicles(data);
        
    //   })
    //   .catch((error) => console.log(error));

    axiosSecure(`/my-vehicles?email=${user.email}`)
    .then(data=>{
        setMyVehicles(data.data)
    })
    .catch(error=>console.log(error))


  }, [user,axiosSecure]);


  return (
    <div>
      {myVehicles.map((vehicle) => (
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
              </ul>

              <p className="text-gray-600 text-sm mt-3">
                {vehicle.detailsDesc}
              </p>
            </div>

            <div className="card-actions justify-end mt-4">
                <Link
                to={`/vehicle-details/${vehicle._id}`}
                className="btn btn-primary"
              >
                View Details
              </Link>
              <Link
                to={`/update-vehicles/${vehicle._id}`}
                className="btn btn-accent"
              >
                Update
              </Link>
              <button onClick={""} className="btn btn-outline">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyVehicles;
