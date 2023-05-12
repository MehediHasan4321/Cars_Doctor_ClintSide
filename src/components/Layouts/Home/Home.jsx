import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import About from '../About/About';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Product from '../Products/Product';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <HomeBanner/>
            <About/>
            <Services/>
            <Contact/>
            <Product/>
        </div>
    );
};

export default Home;