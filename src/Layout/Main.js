import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shered/Navbar/Footer';
import Navbar from '../Pages/Shered/Navbar/Navbar';

const Main = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer> 
         
        </div>
    );
};

export default Main;