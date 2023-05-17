import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceBanner from '../../ShareCompo/ServiceBanner/ServiceBanner';
import { AutnContextProvider } from '../../../AuthProvider/AuthPrivider';
import useTitle from '../../../customHook/useTitle';

const CheckOut = () => {
    const service = useLoaderData()
    const { currentUser } = useContext(AutnContextProvider)
    const { title, price, _id ,img} = service
    useTitle('checkOut')
    const handelOrder = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const price = form.price.value;
        const phoneNumber = form.phoneNumber.value;
        const serviceName= form.serviceName.value;
        const email = form.email.value;
        const status = false
        const order = { customerName: name, orderDate: date, serviceName, orderId:_id, phoneNumber, customerEmail: email, orderPrice: price,img,status }

        fetch('https://car-doctor-server-side-beta.vercel.app/serviceOrders', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        }).then(res => res.json()).then(data => { if(data.insertedId){alert('Data Insart Successfull')}})
    }
    return (
        <>
            <ServiceBanner title={title} />
            <div className='container mx-auto my-24 bg-[#f3f3f3] p-32'>
                <form onSubmit={handelOrder} className='space-y-8'>
                    <div className=' flex space-x-4'>
                        <input type="text" name="name" defaultValue={currentUser?.displayName} required id="" className='w-1/2 bg-white rounded-lg pl-4 py-4' placeholder='Enter Your Name' />
                        <input type="date" name="date" required id="" className='w-1/2 bg-white rounded-lg p-4' />
                    </div>
                    <div className=' flex space-x-4'>
                        <input type="text" name="serviceName" required defaultValue={title} id="" className='w-1/2 bg-white rounded-lg pl-4 py-4' placeholder='Service Name' />
                        <input type="text" name="price" required defaultValue={price} id="" className='w-1/2 bg-white rounded-lg pl-4 py-4' placeholder='Due To Pay' />
                    </div>
                    <div className=' flex space-x-4'>
                        <input type="text" name="phoneNumber" id="" className='w-1/2 bg-white rounded-lg pl-4 py-4' placeholder='Enter Your Phone Number' />
                        <input type="email" name="email" required defaultValue={currentUser?.email} id="" className='w-1/2 bg-white rounded-lg pl-4 py-4' placeholder='Enter Your Email' />
                    </div>
                    {/* <textarea name="textArea" id="" className='w-full h-60 rounded-lg p-3' placeholder='Enter Your Message'></textarea> */}
                    <input className='w-full bg-[#ff3811] text-white font-semibold text-xl py-4 rounded-xl cursor-pointer' type="submit" value="Confirm Order" />
                </form>
            </div>
        </>
    );
};

export default CheckOut;