import React from 'react';
import Header from '../ShareCompo/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../ShareCompo/Footer/Footer';

const LogReg = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
};

export default LogReg;