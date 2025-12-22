import React from "react";
import scratch from "../assets/scratch.png";
import hanger from "../assets/hanger.png";

const Process = () => {
    return (
        <section className="relative bg-[#07B4B01A] pt-20 pb-52">
            <div className="max-w-300 mx-auto">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative">
                    {/* LEFT SIDE SCRATCH BOX */}
                    <div
                        className="bg-no-repeat bg-cover bg-left p-12 min-w-[60%]"
                        style={{
                            backgroundImage: `url(${scratch})`,
                        }}
                    >
                        <button className="border border-secondary text-secondary px-4 py-1 rounded-full text-sm mb-2">
                            Process
                        </button>

                        <h2 className="text-3xl font-bold leading-snug mb-2">
                            Do You Want Custom Project With <br /> Textilery?
                            Contact Us Now
                        </h2>

                        <p className="text-gray-600 mb-4">
                            At Zaheen Knitwear Ltd., we pride ourselves on being
                            your reliable partner for <br /> apparel production.
                            Our commitment to ethical manufacturing ensures that
                            every <br />
                            garment is crafted with care and integrity.
                        </p>

                        <button className="border border-secondary text-secondary px-6 py-2 hover:bg-primary hover:text-white transition cursor-pointer">
                            Learn More
                        </button>
                    </div>

                    {/* RIGHT SIDE HANGER IMAGE */}
                    <img
                        src={hanger}
                        alt="hanger"
                        className="w-fit object-contain block lg:absolute -right-8 top-0"
                    />
                </div>
            </div>
        </section>
    );
};

export default Process;
