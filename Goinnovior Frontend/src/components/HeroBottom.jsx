import React from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";

const HeroBottom = () => {
    return (
        <div className="max-w-300 mx-auto">
            <div className="container mx-auto relative flex flex-col md:flex-row items-center p-6 gap-10">
                <div className="flex items-center gap-2">
                    <CiLocationOn size={30} className="text-secondary"/>
                    <div>
                        <h2 className="text-secondary">Location</h2>
                        <p>Kashimpur,Gazipur Sadar / Gazipur</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <CiMail size={30} className="text-secondary"/>
                    <div>
                        <h2 className="text-secondary">Email</h2>
                        <p>compliance@danysknitwear.com</p>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 md:flex hidden">
                    <div className="w-68 h-60 bg-primary p-10 text-white space-y-3">
                        <h2 className="font-semibold text-2xl">
                            Quality Product
                        </h2>
                        <p className="text-base">
                            Lorem ipsum dolor sitatu amet consec teturarisa
                            adipiscing elit samed.
                        </p>
                        <button className="text-base">Read More</button>
                    </div>
                    <div className="w-68 h-60 bg-secondary p-10 text-white space-y-4">
                        <h2 className="font-semibold text-2xl">
                            Project Overview
                        </h2>
                        <h1 className="text-4xl font-bold mb-10">
                            35 Millions
                        </h1>
                        <button className="text-base">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBottom;
