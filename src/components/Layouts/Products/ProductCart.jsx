import React, { useState } from 'react';
import Rating from '../../ShareCompo/Rating/Rating';
import { FaShoppingBag } from 'react-icons/fa';

const ProductCart = ({ product }) => {
    const [isShow,setShow] = useState('none')
    const { img_url, rating, price, name } = product
    const handleMouseOver = ()=>{
        setShow('block')
    }
    const handleMouseLeave = ()=>{
        setShow('none')
    }
    return (
        <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className='w-[364px] h-[390px] border-[1px] p-5 relative hover:shadow-xl'>
            <div className='w-full h-[219px] bg-gray-100 rounded-md'>
                <img className='w-[70%] mx-auto h-48 p-5' src={img_url} alt="product images" />
            </div>
            <div className='pt-4 text-center space-y-4'>
                <h1 className='flex justify-center text-2xl'><Rating num={rating} /></h1>
                <h1 className='text-3xl font-semibold'>{name}</h1>
                <p className='text-xl text-[#ff3811] font-semibold'>${price}</p>
            </div>

            <FaShoppingBag className='w-10 h-10 text-[#ff3811] bg-gray-200 p-2 rounded absolute top-5 right-5 cursor-pointer' style={{display:`${isShow}`}} />

        </div>
    );
};

export default ProductCart;