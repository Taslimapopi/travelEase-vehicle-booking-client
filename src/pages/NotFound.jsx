import React from "react";
import { Link } from "react-router";


const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white px-4">
      <h1 className="text-9xl font-extrabold mb-6 drop-shadow-lg">404</h1>
      <p className="text-2xl mb-4 font-semibold">Oops! Page Not Found</p>
      <p className="mb-8 max-w-md text-center">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-white text-pink-600 font-bold rounded shadow hover:bg-pink-50 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
