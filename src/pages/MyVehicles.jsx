import React, { useState } from "react";
import { AuthContext } from "../provider/context";
import { useEffect } from "react";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import LoadingSpinner from "../components/LoadingSpinner";
import Swal from "sweetalert2";

const MyVehicles = () => {
  //   const { user } = use(AuthContext);
  const { user } = useAuth();
  const [myVehicles, setMyVehicles] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);

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
      .then((data) => {
        setMyVehicles(data.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [user, axiosSecure]);

  // const handleDelete = (id) => {
  //   fetch(`http://localhost:3000/vehicles/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((res) => res.json());
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   })
  //     .then((data) => {
  //       if (data.isConfirmed) {
  //         Swal.fire({
  //           title: "Deleted!",
  //           text: "Your file has been deleted.",
  //           icon: "success",
  //         });
  //       }
  //       setMyVehicles((prev) => prev.filter((vehicle) => vehicle._id !== id));
  //     })
  //     .catch((error) => console.log(error));
  // };
  const handleDelete = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      // ✅ এখনই DELETE রিকোয়েস্ট পাঠানো হবে
      fetch(`http://localhost:3000/vehicles/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(() => {
          
          Swal.fire({
            title: "Deleted!",
            text: "Your vehicle has been deleted.",
            icon: "success",
          });

        
          setMyVehicles((prev) => prev.filter((v) => v._id !== id));
        })
        .catch((error) => console.log(error));
    }
  });
};

  if (loading) return <LoadingSpinner />;

  return (
    <div className="p-5">
      {/* 🔹 Title */}
      <h2 className="text-3xl font-bold text-center mb-8">My Added Vehicles</h2>

      {/* 🔹 Empty State */}
      {myVehicles.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          You haven't added any vehicle yet.
        </p>
      ) : (
        myVehicles.map((vehicle) => (
          <div
            key={vehicle._id}
            className="card lg:card-side bg-base-100 shadow-xl w-full max-w-5xl mx-auto mb-6"
          >
            {/* ✅ Image section */}
            <figure className="flex-shrink-0 w-full lg:w-[45%] h-[350px] pt-7">
              <img
                src={vehicle.coverImage}
                alt={vehicle.vehicleName}
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

              <div className="p-2 text-left overflow-y-auto">
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
                <button
                  onClick={() => handleDelete(vehicle._id)}
                  className="btn btn-outline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyVehicles;
