import React, { useContext, useEffect, useState } from 'react';
import { AutnContextProvider } from '../../../AuthProvider/AuthPrivider';
import OrderTable from './OrderTable';
import Swal from 'sweetalert2';

const Orders = () => {
    const { currentUser } = useContext(AutnContextProvider)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://https://car-doctor-server-side-beta.vercel.app/orders?email=${currentUser?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const deleteItem = id => {
        const remaining = orders.filter(order => order._id !== id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ff3811',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://https://car-doctor-server-side-beta.vercel.app/orders/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setOrders(remaining)
                            Swal.fire(
                                'Deleted!',
                                'Your Order has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })



    }
    return (
        <div className="overflow-x-auto w-full container mx-auto min-h-[70vh]">
            {
                orders.length>0? <table className='table w-full'>
                <thead>
                    <tr>
                        <th>Delete</th>
                        <th>Images</th>
                        <th>Serviec Name</th>
                        <th>Order Id</th>
                        <th>Price</th>
                        <th>Data</th>
                        <th>Status</th>
                        <th></th>
                    </tr>

                </thead>
                <tbody>
                    {
                       orders.map(order => <OrderTable key={order._id} order={order} deleteItem={deleteItem} />) 
                    }
                </tbody>
            </table>:<h1 className='text-4xl font-semibold text-gray-600 text-center mt-24'>{currentUser?.displayName ? currentUser?.displayName :'You'} Have No Order</h1>
            }
        </div>
    );
};

export default Orders;