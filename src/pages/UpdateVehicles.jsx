import React from "react";
import { useLoaderData } from "react-router";

const UpdateVehicles = () => {
  const vehicle = useLoaderData();
  const handleUpdateVehicle = (e) => {
    e.preventDefault();
    const formData = {
      vehicleName: e.target.name.value,
      owner: e.target.ownerName.value,
      category: e.target.category.value,
      description: e.target.description.value,
      coverImage: e.target.thumbnail.value,
    };
    
    fetch(`http://localhost:3000/vehicles/${vehicle._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        
        alert("vehicle added successfully");
        e.target.reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">Add New Model</h2>
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
              defaultValue={vehicle.owner}
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter name"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="label font-medium">Category</label>
            <select
              defaultValue={vehicle.category}
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
              defaultValue={vehicle.description}
              required
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
              placeholder="Enter description"
            ></textarea>
          </div>
          {/* email */}
          {/* <div>
            <label className="label font-medium">Email</label>
            <input
              type="email"
              name="email"

              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter email"
            />
          </div> */}
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
            className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
          >
            update Vehicle
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateVehicles;
