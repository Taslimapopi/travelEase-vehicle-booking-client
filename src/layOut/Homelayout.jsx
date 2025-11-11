import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';

const Homelayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Homelayout;