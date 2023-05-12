import React from 'react';
import Rating from '../../ShareCompo/Rating/Rating';

const ProductCart = ({ product }) => {
   
    const { img_url, rating, price, name } = product
    return (
        <div className='w-[364px] h-[390px] border-[1px] p-5'>
            <div className='w-full h-[219px] bg-gray-100 rounded-md'>
                <img className='w-[70%] mx-auto h-48 p-5' src={img_url} alt="product images" />
            </div>
            <div className='pt-4 text-center space-y-4'>
                <h1 className='flex justify-center text-2xl'><Rating num={rating}/></h1>
                <h1 className='text-3xl font-semibold'>{name}</h1>
                <p className='text-xl text-[#ff3811] font-semibold'>${price}</p>
            </div>
        </div>
    );
};

export default ProductCart;