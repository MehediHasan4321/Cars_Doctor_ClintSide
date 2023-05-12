import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../ShareCompo/Header/Header';
import Footer from '../ShareCompo/Footer/Footer';
import useTitle from '../../customHook/useTitle';

const Main = () => {
    useTitle('home')
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;