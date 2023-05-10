import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Banner from './Banner/Banner';
const HomeBanner = () => {
    const [banners, setBanners] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/banners').then(res => res.json()).then(data => setBanners(data))
    }, [])
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };
    return (

        <Slider {...settings}>
            {
                banners.map(banner => <Banner key={banner.id} banner={banner} />)
            }
        </Slider>

    );
};

export default HomeBanner;