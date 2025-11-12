import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../provider/context";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import LoadingSpinner from "../components/LoadingSpinner";

const MyBookings = () => {
  const { user } = use(AuthContext);
  const [bookings,setBookings] = useState([])
  const axiosSecure = useAxiosSecure()
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    // fetch(`http://localhost:3000/my-bookings?email=${user.email}`,{
    //   headers:{
    //     authorization: `Bearer ${user.accessToken}`
    //   }
    // })
    //   .then((res) => res.json())
    //   .then((data) => {setBookings(data)
    
    //   })
    //   .catch((error) => console.log(error));

    axiosSecure(`/my-bookings?email=${user.email}`)
    .then(data=>{
      setBookings(data.data)
      setLoading(false)

    })

  }, [user,axiosSecure]);

  const handleRemoveBookings = (_id) => {
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
        console.log("booking deleted");
        fetch(`http://localhost:3000/bookings/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              }); 
            const remaining = bookings.filter(bid=> bid._id !== _id)
            setBookings(remaining);
            }
            
          });
      }
    });
  };
  return (
    <div className="p-4">
  <h3 className="font-bold text-primary text-lg mb-4 text-center md:text-left">
    My Total Bookings: {bookings.length}
  </h3>

  {/* Table container with horizontal scroll on small screens */}
  <div className="overflow-x-auto bg-base-100 shadow-lg rounded-lg">
    <table className="table table-zebra w-full">
      {/* Table Head */}
      <thead className="bg-primary text-white text-sm md:text-base">
        <tr>
          <th>SL No</th>
          <th>Vehicle Name</th>
          <th>Location</th>
          <th>PickUp Time</th>
          <th>Return Time</th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>

      <tbody>
        {loading && (
          <tr>
            <td colSpan="6" className="text-center py-5">
              <LoadingSpinner />
            </td>
          </tr>
        )}

        {bookings.map((b, index) => (
          <tr
            key={b._id}
            className="hover:bg-gray-100 transition duration-200 ease-in-out"
          >
            <td className="text-sm md:text-base">{index + 1}</td>
            <td className="font-semibold text-sm md:text-base">
              {b.vehicleName}
            </td>
            <td className="text-sm md:text-base">{b.location}</td>
            <td className="text-sm md:text-base break-all">
              {b.pickUpTime}
            </td>
            <td className="text-sm md:text-base break-all">
              {b.returnTime}
            </td>
            <td className="text-center">
              <button
                onClick={() => handleRemoveBookings(b._id)}
                className="btn btn-outline btn-xs md:btn-sm hover:btn-error"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}

        {!loading && bookings.length === 0 && (
          <tr>
            <td colSpan="6" className="text-center py-6 text-gray-500">
              You have no bookings yet.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default MyBookings;
