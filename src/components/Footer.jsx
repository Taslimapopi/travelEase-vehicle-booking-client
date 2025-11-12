import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const TwitterXIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M23.25 2.458a.743.743 0 0 0-.606-.26h-20.5a.743.743 0 0 0-.743.744v3.984c0 .2.073.39.206.534l7.44 8.527-7.233 8.587a.75.75 0 0 0 .62 1.183h3.786a.75.75 0 0 0 .6-.3l6.664-9.034 7.405 8.988a.747.747 0 0 0 1.22-.863l-7.3-10.272 7.294-10.272a.75.75 0 0 0-.19-.996z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">TravelEase</h2>
          <p className="text-sm leading-relaxed">
            Your trusted partner for hassle-free vehicle rentals. Experience
            comfort, safety, and convenience with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-orange-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/all-vehicles" className="hover:text-orange-500 transition">
                All Vehicles
              </Link>
            </li>
            <li>
              <Link to="/add-vehicles" className="hover:text-orange-500 transition">
                Add Vehicle
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-orange-500 transition">
                Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@travelease.com</li>
            <li>Phone: +880 123 456 789</li>
            <li>Address: 123 Main Street, Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition w-6 h-6"
              aria-label="Twitter (X)"
            >
              <TwitterXIcon />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} TravelEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
