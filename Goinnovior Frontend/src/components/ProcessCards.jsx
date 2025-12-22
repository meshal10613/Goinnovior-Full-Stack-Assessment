import React from "react";

import checkingIcon from "../assets/card-1.png";
import cuttingIcon from "../assets/card-2.png";
import stitchingIcon from "../assets/card-3.png";
import finishingIcon from "../assets/card-4.png";
import packagingIcon from "../assets/card-5.png";
import inspectionIcon from "../assets/card-6.png";
import deliveryIcon from "../assets/card-7.png";

const cards = [
    {
        title: "Dyeing",
        description: "Adding color to biodegradable materials",
        icon: checkingIcon,
    },
    {
        title: "Cutting",
        description: "Eco-friendly clothing items for all shapes and sizes",
        icon: cuttingIcon,
    },
    {
        title: "Sewing",
        description:
            "Vouching for the ultimate sturdiness and durability of the fabric",
        icon: stitchingIcon,
    },
    {
        title: "Snipping of thread",
        description: "A neat edge, a soft and smooth finish",
        icon: finishingIcon,
    },
    {
        title: "Ironing",
        description: "Ironing it before shipping",
        icon: packagingIcon,
    },
    {
        title: "Checking",
        description:
            "Going through each clothing piece to ensure supreme quality standards are met",
        icon: inspectionIcon,
    },
    {
        title: "Package",
        description: "Folding and packing with the utmost care",
        icon: deliveryIcon,
    },
];

export default function ProcessCards() {
    return (
        <div className="max-w-300 mx-auto pb-20 relative -top-20">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {cards.map((card, index) => (
                    <div key={index} className="w-72 h-64 relative group mx-auto">
                        <div className="relative group overflow-hidden bg-white shadow-lg px-6 py-10 flex flex-col gap-4 w-72 h-64">
                            <div className="z-10">
                                {/* Icon */}
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <img
                                        src={card.icon}
                                        alt={card.title}
                                        className="w-10 h-10 object-contain"
                                    />
                                </div>

                                {/* Text */}
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white">
                                    {card.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-white">
                                    {card.description}
                                </p>
                            </div>
                            {/* Hover background */}
                            <span className="absolute bottom-0 left-0 w-full h-full bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
                        </div>

                        <span className="absolute w-10 h-10 bg-white rounded-full flex justify-center items-center -top-5 left-4/9 shadow-md group-hover:bg-primary group-hover:text-white">
                            {index + 1}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
