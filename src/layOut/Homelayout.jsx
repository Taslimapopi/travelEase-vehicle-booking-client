import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';

const Homelayout = () => {
    const navigation = useNavigate();
    const [loading, setLoading] = useState(false)
    useEffect(() => {
    // Navigation state পরিবর্তন হলে detect করব
    if (navigation.state === "loading") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [navigation.state]);
    return (
        <div>
            <div>
      {loading && <LoadingSpinner />} 
      <NavBar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
        </div>
    );
};

export default Homelayout;