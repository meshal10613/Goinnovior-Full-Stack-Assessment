import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo1 from "../assets/assna.png";
import logo2 from "../assets/ali.png";
import logo3 from "../assets/drive.png";
import logo4 from "../assets/pay.png";

const Company = () => {
    const logos = [logo1, logo2, logo3, logo4];

    const settings = {
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1280,
                settings: { slidesToShow: 5 },
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 4 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 2 },
            },
        ],
    };

    return (
        <div className="w-full py-4">
            <Slider {...settings}>
                {[...logos, ...logos].map((logo, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center"
                    >
                        <img
                            src={logo}
                            alt={`company-logo-${index}`}
                            className="w-auto object-contain mx-auto"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Company;
