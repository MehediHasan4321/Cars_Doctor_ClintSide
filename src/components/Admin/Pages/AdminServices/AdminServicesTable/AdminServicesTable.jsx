import React from 'react';

const AdminServicesTable = ({service,modalOpen,findupdateService,deleteService}) => {
   
    const {title,img,price,_id} = service
    return (
        <tr>
            <th>
                {_id}
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
                <label onClick={()=>findupdateService(_id)} htmlFor={modalOpen} className="px-4 py-1 bg-[#ff3811] text-white font-semibold">update</label>
            </th>
            <th>
                <button onClick={()=>deleteService(_id)} className="px-4 py-1 bg-[#ff3811] text-white font-semibold">Delete</button>
            </th>
        </tr>
    );
};

export default AdminServicesTable;