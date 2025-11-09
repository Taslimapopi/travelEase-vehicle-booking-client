import React from 'react';
import { useLoaderData } from 'react-router';
import VehicleCard from '../components/VehicleCard';

const Home = () => {
    const vehicles = useLoaderData();

    return (
        <div>
            <div className='grid grid-cols-3 gap-1'>
            {
                vehicles.map(vehicle=> 
                    <VehicleCard vehicle={vehicle}></VehicleCard>
                )
            }
            </div>
        </div>
    );
};

export default Home;