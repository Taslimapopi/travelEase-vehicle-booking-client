import { createBrowserRouter } from "react-router";
import Homelayout from "../layOut/Homelayout";
import Home from "../pages/Home";
import VehicleDetails from "../pages/VehicleDetails";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import AddVehicles from "../pages/AddVehicles";
import UpdateVehicles from "../pages/UpdateVehicles";
import MyVehicles from "../pages/MyVehicles";
import MyBookings from "../pages/MyBookings";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import AllVehicles from "../pages/AllVehicles";
import NotFound from "../pages/NotFound";
import LoadingSpinner from "../components/LoadingSpinner";
import DashboardLayout from "../layOut/DashboardLayout";
import DashboardHome from "../hooks/DashboardLayout/DashboardHome";
import BlogPage from "../components/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
    hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        // loader: () => fetch('https://travel-ease-server-kappa.vercel.app/vehicles')
      },
      {
        path: "/all-vehicles",
        element: <AllVehicles></AllVehicles>,
      },
      {
        path: "/vehicle-details/:id",
        element: <VehicleDetails></VehicleDetails>,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/add-vehicles",
        element: (
          <PrivateRoute>
            <AddVehicles></AddVehicles>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/update-vehicles/:id",
        element: (
          <PrivateRoute>
            <UpdateVehicles></UpdateVehicles>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://travel-ease-server-kappa.vercel.app/vehicles/${params.id}`
          ),
      },
      // {
      //   path: "/my-vehicles",
      //   element: (
      //     <PrivateRoute>
      //       <MyVehicles></MyVehicles>
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/my-bookings",
      //   element: (
      //     <PrivateRoute>
      //       <MyBookings></MyBookings>
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/*",
        element: <NotFound></NotFound>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "my-vehicles",
        element: (
          <PrivateRoute>
            <MyVehicles></MyVehicles>
          </PrivateRoute>
        ),
      },
      {
        path: "my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
