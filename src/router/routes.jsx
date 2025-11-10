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


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
    children:[
        {
            index:true,
            element:<Home></Home>,
            loader: () => fetch('http://localhost:3000/vehicles')
        },
        {
            path:'/all-vehicles',
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
            element: <AddVehicles></AddVehicles>
        },
        {
            path:'/update-vehicles/:id',
            element:<UpdateVehicles></UpdateVehicles>,
            loader:({params})=>fetch(`http://localhost:3000/vehicles/${params.id}`)
        },
        {
            path:'/my-vehicles',
            element:<MyVehicles></MyVehicles>

        },
        {
            path:'/my-bookings',
            element:<MyBookings></MyBookings>
        }
    ]
  },
]);