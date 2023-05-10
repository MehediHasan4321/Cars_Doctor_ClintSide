import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import About from '../About/About';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <HomeBanner/>
            <About/>
            <Services/>
            <Contact/>
        </div>
    );
};

export default Home;