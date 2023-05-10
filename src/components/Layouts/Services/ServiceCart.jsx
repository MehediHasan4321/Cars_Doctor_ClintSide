import React from 'react';
import {  BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ServiceCart = ({ service }) => {
    const { img, price, title } = service
    return (
        <div className="card card-compact w-96 bg-base-100 border-[1px]">
            <figure className='p-6'><img className=' rounded-md' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-semibold">{title}</h2>
                
                <div className="flex justify-between items-center">
                    <h3 className='text-xl font-semibold text-[#ff3811]'>Price : ${price}</h3>
                    <Link className='text-[#ff3811]'><BsArrowRight className='text-xl'/></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;