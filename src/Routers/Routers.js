import DashboardLayout from "../Layout/DashboardLayout";
import About from "../Pages/About/About";
import Allusers from "../Pages/Allusers/Allusers";
import Appointment from "../Pages/Appointment/Appointment/Appointment";

import Dashboard from "../Pages/Deshboard/Deshboard/dashboard";
import MyAppointment from "../Pages/Deshboard/MyAppointment/myAppointment";
import Login from "../Pages/Login/Login";
import Nothing from "../Pages/nothing/nothing";
import Signup from "../Pages/signup/Signup";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home/Home");


export const router = createBrowserRouter([
   {
    path:'/',
    element:<Main></Main>,
    children:[
        {path:'/',
        element:<Home></Home>
    }
    ,
    {path:'/login',
    element:<Login></Login>
    },
    {path:'/signup',
    element:<Signup></Signup>
    },

{
    path:'/appointment',
    element:<PrivateRoute><Appointment></Appointment></PrivateRoute>
},
{
    path:'/about',
    element:<About></About>
}
    ]
   
   } ,
   {
    path:'/dashboard',
    element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
        {
            path:"/dashboard",
            element:<MyAppointment></MyAppointment>
        },
        {
            path:"/dashboard/allUser",
            element:<Allusers></Allusers>
        },
        
    ]
    ,
    
   }
   ,{

    path:'*',
    element:<Nothing></Nothing>
   }

])
