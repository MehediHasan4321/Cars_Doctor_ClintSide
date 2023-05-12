import Header from '../ShareCompo/Header/Header';
import AdminSideBar from './AdminSideBar/AdminSideBar';
import { Outlet } from 'react-router-dom';

const Admin = () => {
    return (
        <>
            <Header/>
            <div className='grid grid-cols-4 container mx-auto'>
                <div className=' col-span-1'>
                    <AdminSideBar/>
                </div>
                <div className='col-span-3'>
                    <Outlet/>
                </div>
            </div>
        </>
    );
};

export default Admin;