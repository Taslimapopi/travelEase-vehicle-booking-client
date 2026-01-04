import React, { useEffect, useState } from "react";
import useAuth from "../useAuth";
import { Link } from "react-router";

const UserDashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    fetch(`http://localhost:3000/dashboard-stats?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStats(data);
        setLoading(false);
      })
      .catch(console.error);
  }, [user]);

  if (loading) {
    return <p className="text-center mt-10">Loading dashboard...</p>;
  }

  console.log(stats, user);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">👋 Welcome, {user?.displayName}</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body text-center">
            <h3 className="text-lg font-semibold">🚗 My Vehicles</h3>
            <p className="text-4xl font-bold text-primary">{stats.vehicles}</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md">
          <div className="card-body text-center">
            <h3 className="text-lg font-semibold">📅 My Bookings</h3>
            <p className="text-4xl font-bold text-secondary">
              {stats.bookings}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-4">
        <Link to='/add-vehicles' className="btn btn-primary">Add New Vehicle</Link>
        <Link to='/dashboard/my-bookings' className="btn btn-outline">View My Bookings</Link>
      </div>
    </div>
  );
};

export default UserDashboard;
