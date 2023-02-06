import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import Footer from '../Pages/Shered/Navbar/Footer';
import Navbar from '../Pages/Shered/Navbar/Navbar';

const DashboardLayout = () => {
    const {user}= useContext(AuthContext)
  const [isAdmin]=useAdmin(user?.email)
  
  return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
  <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content  ">
          <Outlet></Outlet>
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboardDrawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
    
      <li><Link to='/dashboard'>My Appointments</Link></li>
     {
      isAdmin && <>
       <li><Link to='/dashboard/allUser'>All users</Link></li></>
     }
    </ul>
  
  </div>
</div>
            
            <Footer></Footer>
            
        </div>
    );
};

export default DashboardLayout;