import React from "react";
import { Link } from "react-router";

const BecomeVehicleOwner = () => {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-yellow-500 py-16 px-4 rounded-2xl my-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 text-white">
        
        {/* Text Content */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold mb-4 leading-tight">
            Have a Vehicle? <br />
            <span className="text-gray-900">Earn with TravelEase</span>
          </h2>

          <p className="text-lg text-white/90 mb-6">
            Turn your idle vehicle into a steady income. List your car, bike, or
            microbus on TravelEase and start earning with secure & verified
            bookings.
          </p>

          <ul className="space-y-2 mb-8 text-white/95">
            <li>✅ Full control over availability</li>
            <li>✅ Verified & trusted users</li>
            <li>✅ Simple dashboard & booking management</li>
            <li>✅ 100% secure platform</li>
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/add-vehicles"
              className="btn bg-[rgb(84,108,220)] text-white hover:bg-black border-none px-8"
            >
              List Your Vehicle
            </Link>

            {/* <Link
              to="/how-it-works"
              className="btn btn-outline text-white border-white hover:bg-white hover:text-orange-500"
            >
              Learn How It Works
            </Link> */}
          </div>
        </div>

        {/* Visual Card */}
        <div className="bg-white text-gray-900 rounded-xl shadow-xl p-6 w-full max-w-sm">
          <h3 className="text-xl font-bold mb-4 text-center">
            Why Vehicle Owners Love Us
          </h3>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Average Monthly Income</span>
              <span className="font-bold text-green-600">৳25,000+</span>
            </div>

            <div className="flex justify-between">
              <span>Service Charge</span>
              <span className="font-bold">Lowest in Market</span>
            </div>

            <div className="flex justify-between">
              <span>Payout</span>
              <span className="font-bold">Fast & Secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeVehicleOwner;
