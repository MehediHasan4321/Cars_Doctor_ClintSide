import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/services').then(res=>res.json()).then(data=>setServices(data))
    },[])
    
    return (
        <div className='container mx-auto my-24 h-auto'>
            <div className='text-center w-[40%] space-y-5 mx-auto'>
                <h4 className='text-xl font-semibold text-[#ff3811]'>Services</h4>
                <h1 className='text-6xl font-semibold'>Our Service Area</h1>
                <p className='text-lg text-gray-600'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-3 gap-6 mt-24 md:px-12'>
                {
                    services.map(service=><ServiceCart key={service._id} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;