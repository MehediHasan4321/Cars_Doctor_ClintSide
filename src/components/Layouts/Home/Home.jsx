import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import About from '../About/About';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <HomeBanner/>
            <About/>
            <Services/>
        </div>
    );
};

export default Home;