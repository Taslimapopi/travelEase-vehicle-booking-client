import React from 'react';
import VehicleCard from '../components/VehicleCard';
import { useLoaderData } from 'react-router';

const AllVehicles = () => {
    const vehicles = useLoaderData()
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

export default AllVehicles;