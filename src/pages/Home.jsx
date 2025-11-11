import React, { useState } from 'react';
import VehicleCard from '../components/VehicleCard';
import useAxios from '../hooks/useAxios';
import Banner from '../components/Banner';

const Home = () => {
    
    const useAxiosHook = useAxios();
    const [vehicles,setVehicles] = useState([])

    useAxiosHook('/vehicles')
    .then(data=>{
        setVehicles(data.data)
    })

    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
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