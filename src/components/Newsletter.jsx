import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-yellow-400 py-16 px-4 mt-5">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Stay Updated with TravelEase 🚗
        </h2>

        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          Subscribe to get the latest vehicle listings, exclusive deals,
          and travel tips straight to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="w-full sm:w-80 px-5 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <button
            type="submit"
            className="px-8 py-3 bg-[rgb(84,108,220)] text-white font-semibold rounded-lg hover:bg-gray-900 transition"
          >
            Subscribe
          </button>
        </form>

        <p className="text-sm text-white/80 mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
