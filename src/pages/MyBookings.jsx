import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../provider/context";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyBookings = () => {
  const { user } = use(AuthContext);
  const [bookings,setBookings] = useState([])
  const axiosSecure = useAxiosSecure()

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
    <div>
      <div>
        <h3 className="font-bold text-primary">
          My Total Bookings: {bookings.length}
        </h3>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>SL No</label>
                </th>
                <th>Vehicle Name</th>
                <th>Location </th>
                <th>PickUp Time</th>
                <th>Return Time</th>
                {/* <th>Status</th> */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bookings.map((b, index) => (
                <tr>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      {/* <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div> */}
                      <div>
                        <div className="font-bold">{b.vehicleName}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {b.location}
                    <br />
                  </td>
                  <td>{b.pickUpTime}</td>
                  <td>{b.pickUpTime}</td>
                  {/* <th>
                    {bid.status === "pending" ? (
                      <div className="badge badge-warning">{bid.status}</div>
                    ) : (
                      <div className="badge badge-success">{bid.status}</div>
                    )}
                  </th> */}
                  <th>
                    <button
                      onClick={() => handleRemoveBookings(b._id)}
                      className="btn btn-outline btn-xs"
                    >
                      Delete Bookings
                    </button>
                  </th>
                </tr>
              ))}

              {/* row 2 */}
              {/* row 3 */}
              {/* row 4 */}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
