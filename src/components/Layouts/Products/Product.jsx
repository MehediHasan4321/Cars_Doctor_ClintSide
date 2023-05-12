import { useEffect, useState } from 'react';
import ProductCart from './ProductCart';

const Product = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/products')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
        })
        .finally(()=>{

        })
    },[])
    return (
        <div className='container mx-auto my-24'>
            <div className='text-center space-y-2 mb-24'>
                <h4 className=' text-md text-[#ff3811] font-semibold'>Our Popular Products</h4>
                <h1 className='text-4xl font-semibold'>Browse Our Products</h1>
                <p className='text-sm text-gray-600'>the majority have suffered alteration in some form, by injected humour, or randomised <br/>words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
            {
                products.map(product=><ProductCart key={product._id} product={product}/>)
            }
            </div>
        </div>
    );
};

export default Product;