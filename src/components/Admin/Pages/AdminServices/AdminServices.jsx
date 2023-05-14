import React, { useContext, useEffect, useState } from 'react';
import AdminServicesTable from './AdminServicesTable/AdminServicesTable';
import { AutnContextProvider } from '../../../../AuthProvider/AuthPrivider';
import Loading from '../../../ShareCompo/Loading/Loading';

const AdminServices = () => {
    const [services, setServices] = useState([])
    const { isLoading, setIsLoading } = useContext(AutnContextProvider)
    useEffect(() => {
        setIsLoading(true)
        fetch('https://car-doctor-server-side-beta.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .finally(() => setIsLoading(false))
    }, [])
    if (!isLoading) {
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
                                services.map(service => <AdminServicesTable key={service._id} service={service} isLoading={isLoading} />)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        );
    } else {
        return <Loading />
    }
};

export default AdminServices;