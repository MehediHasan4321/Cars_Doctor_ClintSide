import React, { useContext, useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';
import { AutnContextProvider } from '../../../AuthProvider/AuthPrivider';
import Loading from '../../ShareCompo/Loading/Loading';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services,setServices] = useState([])
    const {isLoading,setIsLoading} = useContext(AutnContextProvider)
    useEffect(()=>{
        setIsLoading(true)
        fetch('https://car-doctor-server-side-beta.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
        .finally(()=>setIsLoading(false))
    },[])

    if(!isLoading){
        return (
            <div className='container mx-auto my-24 h-auto'>
                <div className='text-center w-[40%] space-y-5 mx-auto'>
                    <h4 className='text-xl font-semibold text-[#ff3811]'>Services</h4>
                    <h1 className='text-6xl font-semibold'>Our Service Area</h1>
                    <p className='text-lg text-gray-600'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
                <div className='grid grid-cols-3 gap-6 mt-24 md:px-12'>
                    {
                        services.map(service=><div key={service._id} className='mx-auto'><ServiceCart service={service}/></div>)
                    }
                </div>
                {
                    services.length > 6 && <div className='flex justify-center mt-8'>
                    <Link to={'/services'} className='border-[1px] border-[#ff3811] px-5 py-3 font-semibold text-ld text-[#ff3811] rounded-md '>More Services</Link>
                </div>
                }
            </div>
        );
    }else{
        return <Loading/>
    }
};

export default Services;