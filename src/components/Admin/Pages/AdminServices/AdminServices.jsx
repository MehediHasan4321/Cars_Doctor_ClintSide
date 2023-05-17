import React, { useContext, useEffect, useState } from 'react';
import AdminServicesTable from './AdminServicesTable/AdminServicesTable';
import { AutnContextProvider } from '../../../../AuthProvider/AuthPrivider';
import Loading from '../../../ShareCompo/Loading/Loading';
import Swal from 'sweetalert2';


const AdminServices = () => {
    const [services, setServices] = useState([])
    const { isLoading, setIsLoading } = useContext(AutnContextProvider)
    const [addServices, setAddServices] = useState({})
    const [serviceDefaultValue, setServiceDefaultValue] = useState({})
    const [servicePreview, setServicePreview] = useState({})

    useEffect(() => {
        setIsLoading(true)
        fetch('https://car-doctor-server-side-beta.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .finally(() => setIsLoading(false))
    }, [])
    const addService = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.name.value;
        const price = form.price.value;
        const img = form.url.value;
        const rating = form.rating.value
        const service = { title, price, img, rating }
        setAddServices(service)
    }
    const uploadService = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want Upload This Services!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Upload it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('https://car-doctor-server-side-beta.vercel.app/services', {
                    method: "POST",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(service)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire(
                                'Uploaded!',
                                'Your file has been Upload.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    const findupdateService = id => {
        fetch(`https://car-doctor-server-side-beta.vercel.app/services/${id}`)
            .then(res => res.json())
            .then(data => {
                setServiceDefaultValue(data)

            })
    }
    const updateServicepreview = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.name.value;
        const price = form.price.value;
        const img = form.url.value;
        const rating = form.rating.value
        const updateProduct = { title, price, img, rating }
        setServicePreview(updateProduct)

    }
    const updateService = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You want to update this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-doctor-server-side-beta.vercel.app/services/${id}`, {
                    method: 'PUT',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(servicePreview)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            Swal.fire(
                                'Updated!',
                                'Your file has been update.',
                                'success'
                            )
                        }
                    })



            }
        })
    }
    const deleteService = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-doctor-server-side-beta.vercel.app/services/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    const handleEmtyvalue = () => {
        setServiceDefaultValue('')
        setServicePreview('')
    }

    if (!isLoading) {
        return (
            <>
                <div className='my-8'>
                    <h1 className='text-3xl font-semibold text-center my-8'>On Going All Service {services.length}</h1>
                    <label htmlFor='addService' className='px-6 py-2 bg-[#ff3811] text-white font-semibold rounded'>Add Services</label>
                </div>
                <div className="overflow-x-auto w-full mb-24">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Service Id</th>
                                <th>Service Images</th>
                                <th>Servies Name</th>
                                <th>Price</th>
                                <th>Update Service</th>
                                <th>Delete Services</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                services.map(service => <AdminServicesTable key={service._id} service={service} isLoading={isLoading} modalOpen={'modalOpen'} findupdateService={findupdateService} deleteService={deleteService} />)
                            }
                        </tbody>

                    </table>
                </div>

                {/* Services Update Modal */}
                <input type="checkbox" id="modalOpen" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <div className='flex items-center justify-around'>
                            <div className="card card-compact w-96 h-96 bg-base-100 border-[1px]">
                                <figure className='p-6'><img className=' rounded-md' src={servicePreview.img ? servicePreview?.img : 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-2xl font-semibold">{servicePreview.title ? servicePreview?.title : 'Service Title'}</h2>

                                    <div className="flex justify-between items-center">
                                        <h3 className='text-xl font-semibold text-[#ff3811]'>Price : ${servicePreview.price ? servicePreview?.price : '00'}</h3>
                                        <button onClick={() => updateService(serviceDefaultValue._id)} className='bg-[#ff3811] text-white px-4 font-bold py-1 rounded-md'>Update Services</button>
                                    </div>
                                </div>

                            </div>
                            <form onSubmit={updateServicepreview}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Service Name</span>
                                    </label>
                                    <input type="text" defaultValue={serviceDefaultValue.title} placeholder="Enter Service Name" required name='name' className="input input-bordered w-96" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Service Price</span>
                                    </label>
                                    <input type="number" defaultValue={serviceDefaultValue.price} placeholder="Added Service Price" required name='price' className="input input-bordered w-96" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Added Service Image Url</span>
                                    </label>
                                    <input type="url" defaultValue={serviceDefaultValue.img} placeholder="Added Service Img Url" required name='url' className="input input-bordered w-96" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Rating</span>
                                    </label>
                                    <input type="text" defaultValue={serviceDefaultValue.rating} placeholder="Added Product Rating" name='rating' className="input input-bordered w-96" />
                                </div>
                                <div className="form-control mt-4">
                                    <input type="submit" value={'See Preview'} className="input input-bordered bg-[#ff3811] py-2 text-white font-semibold rounded-lg w-96" />
                                </div>
                            </form>

                        </div>
                        <div className="modal-action">
                            <label onClick={handleEmtyvalue} htmlFor="modalOpen" className="btn">Close!</label>
                        </div>
                    </div>
                </div>
                {/* Added Service Modal */}
                <input type="checkbox" id="addService" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <div className='flex items-center justify-around'>
                            <div className="card card-compact w-96 h-96 bg-base-100 border-[1px]">
                                <figure className='p-6'><img className=' rounded-md' src={addServices.img ? addServices?.img : 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-2xl font-semibold">{addServices.title ? addServices?.title : 'Service Title'}</h2>

                                    <div className="flex justify-between items-center">
                                        <h3 className='text-xl font-semibold text-[#ff3811]'>Price : ${addServices.price ? addServices?.price : '00'}</h3>
                                        <button onClick={uploadService} className='bg-[#ff3811] text-white px-4 font-bold py-1 rounded-md'>Upload Services</button>
                                    </div>
                                </div>

                            </div>
                            <form onSubmit={addService}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Service Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter Service Name" required name='name' className="input input-bordered w-96" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Service Price</span>
                                    </label>
                                    <input type="number" placeholder="Added Service Price" required name='price' className="input input-bordered w-96" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Added Service Image Url</span>
                                    </label>
                                    <input type="url" placeholder="Added Service Img Url" required name='url' className="input input-bordered w-96" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Rating</span>
                                    </label>
                                    <input type="text" placeholder="Added Product Rating" name='rating' className="input input-bordered w-96" />
                                </div>
                                <div className="form-control mt-4">
                                    <input type="submit" value={'See Preview'} className="input input-bordered bg-[#ff3811] py-2 text-white font-semibold rounded-lg w-96" />
                                </div>
                            </form>

                        </div>
                        <div className="modal-action">
                            <label htmlFor="addService" className="btn">Yay!</label>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return <Loading />
    }
};

export default AdminServices;