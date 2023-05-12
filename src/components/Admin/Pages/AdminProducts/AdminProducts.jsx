import React, { useEffect, useState } from 'react';
import AdminProductsTable from './AdminProductsTable';

const AdminProducts = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <div className='my-12'>
            <h1 className='text-4xl font-semibold text-center '>On Going Products {products.length}</h1>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Product Images</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Update Product</th>
                            <th>Delete Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product=><AdminProductsTable key={product._id} product={product}/>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AdminProducts;