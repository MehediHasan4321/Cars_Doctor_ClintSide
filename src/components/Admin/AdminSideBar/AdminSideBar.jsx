import React from 'react';
import { Link } from 'react-router-dom';

const AdminSideBar = () => {
    return (
        <div className='w-60 bg-gray-200 h-[85vh] px-4 pt-8'>

            <div className='mt-4'>
                <Link to={'/admin/adminServices'}><button className='bg-[#ff3811] text-white text-lg font-semibold w-full py-2 rounded-md'>All Services</button></Link>
            </div>
            <div className='mt-8'>
                <Link to={'/admin/adminProducts'}><button className='bg-[#ff3811] text-white text-lg font-semibold w-full py-2 rounded-md' >All Products</button></Link>
            </div>
            <div className='mt-8'>
                <Link to={'/admin/productOrders'}><button className='bg-[#ff3811] text-white text-lg font-semibold w-full py-2 rounded-md'>Product Orders</button></Link>
            </div>
            <div className='mt-8'>
                <Link to={'/admin/serviceOrders'}><button className='bg-[#ff3811] text-white text-lg font-semibold w-full py-2 rounded-md'>Service Orders</button></Link>
            </div>
        </div>
    );
};

export default AdminSideBar;