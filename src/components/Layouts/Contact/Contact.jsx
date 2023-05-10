import React from 'react';
import {BsCalendar2WeekFill, BsPhoneVibrateFill } from 'react-icons/bs';
import { FaLocationArrow } from 'react-icons/fa';
const Contact = () => {
    return (
        <div className='container mx-auto bg-black min-h-fit rounded-lg my-8 grid grid-cols-1 md:grid-cols-3'>
            <div className='p-16 text-white flex items-center gap-4 justify-center'>
                <BsCalendar2WeekFill className='text-5xl'/>
                <div>
                    <small>We are open monday-friday</small>
                    <h2 className='text-2xl font-semibold'>7:00 am - 9:00 pm</h2>
                </div>
            </div>
            <div className='p-16 text-white flex items-center gap-4 justify-center'>
                <BsPhoneVibrateFill className='text-5xl'/>
                <div>
                    <small>Have Any Question?</small>
                    <h2 className='text-2xl font-semibold'>+2546 251 2658</h2>
                </div>
            </div>
            <div className='p-16 text-white flex items-center gap-4 justify-center'>
                <FaLocationArrow className='text-5xl'/>
                <div>
                    <small>Need a repair? our address</small>
                    <h2 className='text-2xl font-semibold'>Liza Street, New York</h2>
                </div>
            </div>
        </div>
    );
};

export default Contact;