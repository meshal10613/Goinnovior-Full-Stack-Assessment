import React from "react";
import vedio from "../assets/vedio.mp4";
import vedioImag from "../assets/vedio.png";

const VideoHero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={vedio}
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="max-w-300 mx-auto h-screen">
                <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between gap-20 md:gap-0 h-full text-white">
                    <div className="md:flex-2">
                        <h2 className="text-[#FFFFFF99] text-base md:text-xl">
                            elevate your Band With
                        </h2>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            High-Quality Garments. Ethically Made.
                        </h1>
                        <p className="mb-6 text-[#FFFFFF99] text-base md:text-xl">
                            At Zaheen Knitwear Ltd., we pride ourselves on being
                            your reliable partner for apparel production. Our
                            commitment to ethical manufacturing ensures that
                            every garment is crafted with care and integrity.
                        </p>
                        <div className="flex items-center gap-3">
                            <button className="btn btn-primary">
                                Get Started
                            </button>
                            <button className="btn bg-transparent text-white border border-white">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="md:flex-1 flex items-center justify-end">
                        <img
                            src={vedioImag}
                            alt="vedio image"
                            className="animate animate-pulse cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoHero;
