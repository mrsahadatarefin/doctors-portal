import DashboardLayout from "../Layout/DashboardLayout";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Dashboard from "../Pages/Deshboard/Deshboard/dashboard";
import MyAppointment from "../Pages/Deshboard/MyAppointment/myAppointment";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/signup/Signup";
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
    element:<Appointment></Appointment>
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
        }
    ]
   }
])
