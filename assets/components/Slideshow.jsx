import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Fragment } from 'react';
import slide1 from './slides/1.jpg';
import slide10 from './slides/10.jpg';
import slide2 from './slides/2.jpg';
import slide4 from './slides/4.jpg';
import slide6 from './slides/6.jpg';
import slide7 from './slides/7.jpg';

const Slideshow = () => {
    const settings = {
        centerMode: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 7000,
        centerPadding: 0,
        easing: 'swing',
        speed: 600,
    };

    return (
        <Fragment>
            <div className="hero-wrapper"></div>
            <div className="home-slideshow-wrapper">
                <Slider className="home-slideshow" {...settings}>
                    <div>
                        <img src={slide4} alt="Slide" />
                    </div>
                    <div>
                        <img src={slide1} alt="Slide" />
                    </div>
                    <div>
                        <img src={slide10} alt="Slide" />
                    </div>
                    <div>
                        <img src={slide2} alt="Slide" />
                    </div>
                    <div>
                        <img src={slide7} alt="Slide" />
                    </div>
                    <div>
                        <img src={slide6} alt="Slide" />
                    </div>
                </Slider>
            </div>
        </Fragment>
    );
};

export default Slideshow;
