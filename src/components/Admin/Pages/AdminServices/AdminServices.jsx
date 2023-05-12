import React, { useEffect, useState } from 'react';
import AdminServicesTable from './AdminServicesTable/AdminServicesTable';

const AdminServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className='text-3xl font-semibold text-center my-8'>On Going All Service {services.length}</h1>
                <button className='px-6 py-2'>Add Services</button>
            </div>
            <div className="overflow-x-auto w-full">
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
                            services.map(service => <AdminServicesTable key={service._id} service={service} />)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AdminServices;