import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

const UpdateVehicles = () => {
  const { user } = useAuth();
  const vehicle = useLoaderData();
  console.log(vehicle, user);
  const navigate = useNavigate();

  const handleUpdateVehicle = (e) => {
    e.preventDefault();
    const formData = {
      vehicleName: e.target.name.value,
      owner: e.target.ownerName.value,
      category: e.target.category.value,
      pricePerDay: e.target.pricePerDay.value,
      location: e.target.location.value,
      availability: e.target.availability.value,
      seatCapacity: e.target.seatCapacity.value,
      detailsDesc: e.target.description.value,
      coverImage: e.target.thumbnail.value,
      created_at: new Date(),
      userEmail: user.email,
    };

    fetch(
      `https://travel-ease-server-kappa.vercel.app/vehicles/${vehicle._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("vehicle updated successfully");
        navigate("/my-vehicles");
        e.target.reset();
      })
      .catch((error) => toast.error(error));
  };

  return (
    <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">
          Update Your Model
        </h2>
        <form onSubmit={handleUpdateVehicle} className="space-y-4">
          {/*vehicle Name Field */}
          <div>
            <label className="label font-medium">Vehicle Name</label>
            <input
              type="text"
              name="name"
              defaultValue={vehicle.vehicleName}
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter name"
            />
          </div>
          {/* owner name */}
          <div>
            <label className="label font-medium">Owner</label>
            <input
              type="text"
              name="ownerName"
              defaultValue={user.displayName}
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter name"
            />
          </div>
          {/* price per day */}
          <div>
            <label className="label font-medium">Price Per Day</label>
            <input
              type="text"
              name="pricePerDay"
              defaultValue={vehicle.pricePerDay}
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter Price Per day"
            />
          </div>
          {/* location */}
          <div>
            <label className="label font-medium">Location</label>
            <input
              type="text"
              name="location"
              defaultValue={vehicle.location}
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter Location"
            />
          </div>
          {/* availability */}
          <div>
            <label className="label font-medium">Availability</label>
            <input
              type="text"
              name="availability"
              defaultValue={vehicle.availability}
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Availability"
            />
          </div>
          {/* seatCapacity */}
          <div>
            <label className="label font-medium">Seat Capacity</label>
            <input
              type="text"
              name="seatCapacity"
              defaultValue={vehicle.seatCapacity}
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="seatCapacity"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="label font-medium">Category</label>
            <select
              defaultValue={""}
              name="category"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="SUV">SUV</option>
              <option value="Bus">Bus</option>
              <option value="Sedan">Sedan</option>
              <option value="Van">Van</option>
              <option value="Electrics">Electrics</option>
            </select>
          </div>

          {/* Description Textarea */}
          <div>
            <label className="label font-medium">Description</label>
            <textarea
              name="description"
              defaultValue={vehicle.detailsDesc}
              required
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
              placeholder="Enter description"
            ></textarea>
          </div>
          {/* email */}
          <div>
            <label className="label font-medium">Email</label>
            <input
              type="email"
              name="email"
              defaultValue={user.email}
              readOnly
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter email"
            />
          </div>
          {/* created at */}

          {/* Thumbnail URL */}
          <div>
            <label className="label font-medium">Thumbnail URL</label>
            <input
              type="url"
              name="thumbnail"
              defaultValue={vehicle.coverImage}
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full btn_common  hover:to-red-700"
          >
            Update Vehicle
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateVehicles;
