import React, { useEffect, useState } from 'react';
import AdminProductsTable from './AdminProductsTable';
import Rating from '../../../ShareCompo/Rating/Rating';
import Swal from 'sweetalert2';

const AdminProducts = () => {
    const [products, setProducts] = useState([])
    const [update, setUpdate] = useState({})
    const [preview, setPreview] = useState({})
    const [addedProduct, setAddedProduct] = useState('')
    const { img_url, rating, price, name, _id } = update
    useEffect(() => {
        fetch('https://car-doctor-server-side-beta.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const findupdateProduct = id => {
        const query = products.find(pro => pro._id === id)
        setUpdate(query)
    }

    const previewCart = event => {
        event.preventDefault()

        const name = event.target.name.value;
        const proPrice = event.target.proPrice.value
        const imgUrl = event.target.url.value;
        const rating = event.target.rating.value
        const product = { name, proPrice, imgUrl, rating }
        setPreview(product)
    }
    const addedProductPreview = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const img_url = form.url.value;
        const rating = form.rating.value
        const product = { name, price, img_url, rating, }
        setAddedProduct(product)
    }
    const addProduct = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to Added this Product!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Added it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('https://car-doctor-server-side-beta.vercel.app/products', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(addedProduct)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId)
                            setAddedProduct('')
                        Swal.fire(
                            'Product Added!',
                            'Your file has been Added.',
                            'success'
                        )
                    })


            }
        })
    }
    const updateProduct = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You want to update this Product!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-doctor-server-side-beta.vercel.app/products/${id}`, {
                    method: 'PUT',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(preview)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0)
                            Swal.fire(
                                'Deleted!',
                                'Your file has been Updated.',
                                'success'
                            )
                    })


            }
        })
    }

    const deleteProduct = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to Delete this Product!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-doctor-server-side-beta.vercel.app/products/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = products.filter(pro => pro._id !== id)
                            setProducts(remaining)
                            Swal.fire(
                                'Deleted!',
                                'Your file has been Deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <div>

            <div className='my-12'>
                <h1 className='text-4xl font-semibold text-center '>On Going Products {products.length}</h1>
                <label htmlFor='productAddModal' className='border-2 border-[#ff3811] px-6 py-2 text-black font-semibold mt-4 hover:rounded-xl'>Add Product</label>

            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Product Rating</th>
                            <th>Product Images</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Update Product</th>
                            <th>Delete Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <AdminProductsTable key={product._id} product={product} updateProduct={findupdateProduct} modalOpen={"modalOpen"} deleteProduct={deleteProduct} />)
                        }
                    </tbody>

                </table>
            </div>
            {/* Modal for Upate */}
            <input type="checkbox" id='modalOpen' className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className='grid grid-cols-2 gap-6 w-full'>
                        <div className='w-[364px] h-[440px] border-[1px] p-5'>
                            <div className='w-full h-[219px] bg-gray-100 rounded-md'>
                                <img className='w-[70%] mx-auto h-48 p-5' src={preview?.imgUrl ? preview.imgUrl : img_url} alt="product images" />
                            </div>
                            <div className='pt-4 text-center space-y-4'>
                                <h1 className='flex justify-center text-2xl'><Rating num={preview?.rating ? preview.rating : rating} /></h1>
                                <h1 className='text-3xl font-semibold'>{preview?.name ? preview.name : name}</h1>
                                <p className='text-xl text-[#ff3811] font-semibold'>${preview?.proPrice ? preview.proPrice : price}</p>
                                <button onClick={() => updateProduct(_id)} className='w-full py-2 text-white bg-[#ff3811] font-semibold rounded'>Update Product</button>
                            </div>
                        </div>
                        <form onSubmit={previewCart}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" placeholder="Update Product Name" required name='name' defaultValue={name} className="input input-bordered w-4/5" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Price</span>
                                </label>
                                <input type="number" placeholder="Update Product Price" required name='proPrice' defaultValue={price} className="input input-bordered w-4/5" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Image Url</span>
                                </label>
                                <input type="url" placeholder="Update Product Img Url" required name='url' defaultValue={img_url} className="input input-bordered w-4/5" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Rating</span>
                                </label>
                                <input type="text" placeholder="Update Product Rating" required name='rating' defaultValue={rating} className="input input-bordered w-4/5" />
                            </div>
                            <div className="form-control mt-4">
                                <input type="submit" value={'See Preview'} className="input input-bordered bg-[#ff3811] py-2 text-white font-semibold rounded-lg w-4/5" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-action">
                        <label onClick={() => setPreview({})} htmlFor="modalOpen" className="btn">Close</label>
                    </div>
                </div>
            </div>
            {/* Modal For Add Product */}
            <input type="checkbox" id='productAddModal' className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className='grid grid-cols-2 gap-6 w-full'>
                        <div className='w-[364px] h-[440px] border-[1px] p-5'>
                            <div className='w-full h-[219px] bg-gray-100 rounded-md'>
                                <img className='w-[70%] mx-auto h-48 p-5' src={addedProduct?.img_url} alt="product images" />
                            </div>
                            <div className='pt-4 text-center space-y-4'>
                                <h1 className='flex justify-center text-2xl'><Rating num={addedProduct?.rating} /></h1>
                                <h1 className='text-3xl font-semibold'>{addedProduct?.name}</h1>
                                <p className='text-xl text-[#ff3811] font-semibold'>${addedProduct?.price}</p>
                                {addedProduct && <button onClick={addProduct} className='w-full py-2 text-white bg-[#ff3811] font-semibold rounded'>Add Product Product</button>}
                            </div>
                        </div>
                        <form onSubmit={addedProductPreview}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" placeholder="Added Product Name" required name='name' className="input input-bordered w-4/5" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Price</span>
                                </label>
                                <input type="number" placeholder="Added Product Price" required name='price' className="input input-bordered w-4/5" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Added Product Image Url</span>
                                </label>
                                <input type="url" placeholder="Added Product Img Url" required name='url' className="input input-bordered w-4/5" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Rating</span>
                                </label>
                                <input type="text" placeholder="Added Product Rating" required name='rating' className="input input-bordered w-4/5" />
                            </div>
                            <div className="form-control mt-4">
                                <input type="submit" value={'See Preview'} className="input input-bordered bg-[#ff3811] py-2 text-white font-semibold rounded-lg w-4/5" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="productAddModal" className="btn">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProducts;