import React, { useState } from 'react';

const ServiceOrderTable = ({ service }) => {
    const {_id,customerName,customerEmail,img,orderPrice,orderDate,status,serviceName} = service || {}
    const [isConfirm,setIsConfirm] = useState(status)
    const handleConfirmOrder = id=>{
    
        fetch(`https://car-doctor-server-side-beta.vercel.app/allServieOrder/${id}`,{
            method:"PUT",
            headers:{'content-type':'application/json'},
            body:JSON.stringify({status:true})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                setIsConfirm(true)
            }
        })

    }
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Service Order Images" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">{_id}</div>
                    </div>
                </div>
            </td>
            <td>
                ${orderPrice}
            </td>
            <td>{orderDate}</td>
            <td>
                {customerName}
                <br />
                <span className="badge badge-ghost badge-sm">{customerEmail}</span>
            </td>
            <th>
                {
                    isConfirm ? <button className="bg-green-400 px-2 py-1 text-white rounded-md">Order Confirmed</button> : <button onClick={()=> handleConfirmOrder(_id)} className="bg-[#ff3811] px-2 py-1 text-white rounded-md">Confirm Order</button>
                }
            </th>
        </tr>
    );
};

export default ServiceOrderTable;