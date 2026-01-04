import React, { use, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { AuthContext } from "../provider/context";
import { format, parseISO, isBefore } from "date-fns";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

const VehicleDetails = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState({});
  const bookModalRef = useRef(null);
  const { user } = use(AuthContext) 
  const navigate = useNavigate();

  console.log(user)

  useEffect(() => {
    
    fetch(`https://travel-ease-server-kappa.vercel.app/vehicles/${id}`,
       {
      headers: {
        authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setVehicle(data));
  }, [id, user]);

 
  
  // const handleDelete = () => {
  //   fetch(`https://travel-ease-server-kappa.vercel.app/vehicles/${vehicle._id}`, {
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
  //     })
  //     .catch((error) => console.log(error));
  // };

  const handleBookModalRef = () => {
    bookModalRef.current.showModal();
  };

  const handleBookForm = (e) => {
    e.preventDefault();

    const pickUpTimeRaw = e.target.pickingTime.value; // string from input
    const returnTimeRaw = e.target.returnTime.value;

    // Optional: parse to Date object
    const pickUpTimeDate = parseISO(pickUpTimeRaw);
    const returnTimeDate = parseISO(returnTimeRaw);

    // const formattedPickUpTime = format(
    //   pickUpTimeDate,
    //   "yyyy-MM-dd'T'HH:mm:ssxxx"
    // );
    // const formattedReturnTime = format(
    //   returnTimeDate,
    //   "yyyy-MM-dd'T'HH:mm:ssxxx"
    // );

    const formattedPickUpTime = format(pickUpTimeDate, "yyyy-MM-dd'T'HH:mm");
    const formattedReturnTime = format(returnTimeDate, "yyyy-MM-dd'T'HH:mm");

    if (isBefore(returnTimeDate, pickUpTimeDate)) {
      alert("Return time must be after pick up time");
      return;
    }

    const bookData = {
      // user: user.displayName,
      vehicleName: e.target.vehicleName.value,
      pickUpTime: formattedPickUpTime,
      returnTime: formattedReturnTime,
      location: e.target.location.value,
      email: e.target.email.value,
    };

    fetch("https://travel-ease-server-kappa.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully Booked! have a nice trip");
        e.target.reset();
        // navigate("/");
        if (bookModalRef.current) {
          bookModalRef.current.close();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="p-5 flex justify-center ">
      <div className="card lg:card-side bg-base-100 shadow-xl w-full max-w-5xl">
        {/*   Image section */}
        <figure className="flex-shrink-0 w-full lg:w-[45%] h-[350px] pt-7 ">
          <img
            src={vehicle.coverImage}
            alt="Album"
            className="object-cover w-full h-full rounded-l-xl"
          />
        </figure>

        {/* Content section */}
        <div className="card-body w-full lg:w-[55%]">
          <div className="bg-gray-100 py-3 text-center rounded">
            <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">
              {vehicle.vehicleName}
            </h2>
          </div>

          <div className="p-2 text-left overflow-y-auto ">
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

            <p className="text-gray-600 text-sm mt-3">{vehicle.detailsDesc}</p>
          </div>

          <div className="card-actions justify-end mt-4">
            <button onClick={handleBookModalRef} className="btn btn_common">
              Book Now
            </button>

            <Link onClick={() => navigate(-1)} className="btn btn-accent">
              Go Back
            </Link>
          </div>
        </div>
      </div>
      <dialog
        ref={bookModalRef}
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-2xl text-center text-green-700">
            Ready to Ride? Book Your Vehicle Now!
          </h3>
          <form onSubmit={handleBookForm}>
            <fieldset className="fieldset space-y-2">
              {/* Name
              <label className="label font-semibold">Name</label>
              <input
                type="text"
                defaultValue={user.displayName}
                name="userName"
                className="input input-bordered w-full"
                placeholder="Enter your name"
                required
              /> */}

              {/* Vehicle Name */}
              <label className="label font-semibold">Vehicle Name</label>
              <input
                type="text"
                defaultValue={vehicle.vehicleName}
                readOnly
                name="vehicleName"
                className="input input-bordered w-full"
                placeholder="Enter vehicle name"
                required
              />

              <div className="flex gap-3">
                <div>
                  {/* Pickup Time */}

                  <label className="label font-semibold">Pick Up Time</label>
                  <input
                    type="datetime-local"
                    name="pickingTime"
                    className="input input-bordered w-full"
                    min={format(new Date(), "yyyy-MM-dd'T'HH:mm")}
                  />
                </div>
                <div>
                  {/* Return time */}
                  <label className="label font-semibold">Return Time</label>
                  <input
                    type="datetime-local"
                    name="returnTime"
                    className="input input-bordered w-full"
                    min={format(new Date(), "yyyy-MM-dd'T'HH:mm")}
                    required
                  />
                </div>
              </div>

              {/* Pickup Location */}
              <label className="label font-semibold">Pickup Location</label>
              <input
                type="text"
                name="location"
                className="input input-bordered w-full"
                placeholder="Enter pickup location"
                required
              />

              {/* Email */}
              <label className="label font-semibold">Email</label>
              <input
                type="email"
              value={user?.email || ""}
                // defaultValue={user.email}
                name="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                required
              />

              <button type="submit" className="btn btn-accent mt-4 w-full">
                Book Now
              </button>
            </fieldset>
          </form>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default VehicleDetails;
