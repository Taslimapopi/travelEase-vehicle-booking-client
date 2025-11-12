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


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
    children:[
        {
            index:true,
            element:<Home></Home>,
            // loader: () => fetch('http://localhost:3000/vehicles')
        },
        {
            path:'/all-vehicles',
            // loader: () => fetch('http://localhost:3000/all-vehicles'),
            element: <AllVehicles></AllVehicles>
        },
        {
            path:'/vehicle-details/:id',
            element:<PrivateRoute><VehicleDetails></VehicleDetails></PrivateRoute>
        },
        {
            path:'/auth/login',
            element:<Login></Login>
        },
        {
            path:'/auth/register',
            element:<Register></Register>
        },
        {
            path:'/add-vehicles',
            element: <PrivateRoute><AddVehicles></AddVehicles></PrivateRoute>
        },
        {
            path:'/update-vehicles/:id',
            element:<PrivateRoute><UpdateVehicles></UpdateVehicles></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:3000/vehicles/${params.id}`)
        },
        {
            path:'/my-vehicles',
            element:<PrivateRoute><MyVehicles></MyVehicles></PrivateRoute>

        },
        {
            path:'/my-bookings',
            element:<PrivateRoute><MyBookings></MyBookings></PrivateRoute>
        },
        {
            path:'/profile',
            element:<PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
            path:'/*',
            element:<NotFound></NotFound>
        }
        
    ]
  },
]);