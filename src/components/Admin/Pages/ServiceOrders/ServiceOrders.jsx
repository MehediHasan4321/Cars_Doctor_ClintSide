import React, { useEffect, useState } from 'react';
import ServiceOrderTable from './ServiceOrderTable';

const ServiceOrders = () => {
    const [serviceOrder, setServiceOrder] = useState([])
    useEffect(() => {
        fetch('https://car-doctor-server-side-beta.vercel.app/allServieOrder')
            .then(res => res.json())
            .then(data => setServiceOrder(data))
    }, [])

    return (
        <div>
            <div className='my-12'>
                <h1 className='text-3xl font-semibold text-center'>Total Service Orders Are Available {serviceOrder?.length}</h1>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Order Details</th>
                                <th>Price</th>
                                <th>Order Date</th>
                                <th>Customer Details</th>
                                <th>Order Confirm ?</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                               serviceOrder && serviceOrder.map(service=><ServiceOrderTable key={service._id} service={service}/>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ServiceOrders;