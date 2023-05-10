import React from 'react';
import img1 from '../../../assets/images/about_us/person.jpg'
import img2 from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 my-[130px]'>
            <div className='relative'>
                <img className='w-4/5 rounded-md' src={img1} alt="Person images" />
                <img className='w-[50%] absolute bottom-[-50px] right-[80px] rounded-md border-l-8 border-t-8 border-white' src={img2} alt="parts images" />
            </div>
            <div className='space-y-4'>
                <h4 className='text-xl text-[#ff3811] font-bold'>About Us</h4>
                <h1 style={{lineHeight:'70px'}} className='text-6xl font-semibold '>We are qualified <br/>& of experience<br/> in this field</h1>
                <p className='text-gray-600 md:6 xl:pr-32'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='text-gray-600 md:6 xl:pr-32'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                <button className='bg-[#ff3811] text-white font-semibold px-7 py-4 rounded-md text-lg'>Get More Info</button>
            </div>
        </div>
    );
};

export default About;