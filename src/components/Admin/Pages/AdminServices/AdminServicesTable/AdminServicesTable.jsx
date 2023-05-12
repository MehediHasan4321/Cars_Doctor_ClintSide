import React from 'react';

const AdminServicesTable = ({service}) => {
    console.log(service)
    const {title,img,price,service_id} = service
    return (
        <tr>
            <th>
                {service_id}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {title}
            </td>
            <td>${price}</td>
            <th>
                <button className="px-4 py-1 bg-[#ff3811] text-white font-semibold">update</button>
            </th>
            <th>
                <button className="px-4 py-1 bg-[#ff3811] text-white font-semibold">Delete</button>
            </th>
        </tr>
    );
};

export default AdminServicesTable;