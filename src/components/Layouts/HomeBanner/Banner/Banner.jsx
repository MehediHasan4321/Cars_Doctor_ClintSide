import React from 'react';

const Banner = ({banner}) => {

    return (
        <div className='h-[80vh] w-full flex items-center pl-32 rounded-lg' style={{backgroundImage:`linear-gradient(80deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${banner.img_url})`,backgroundPosition:'center'}}>
            <div className='text-white w-[40%]'>
                <h1 className='text-6xl font-semibold leading-[70px]'>{banner.banner_title?banner.banner_title:''}</h1>
                <p className='my-8 leading-8'>{banner.banner_des}</p>
                <div className='flex gap-3'>
                    <button className='text-md font-semibold bg-[#ff3811] text-white px-5 py-3 rounded-md'>Discover More</button>
                    <button className='text-white px-5 py-3 text-md font-semibold border-[1px] border-white rounded-md'>Latest Project</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;