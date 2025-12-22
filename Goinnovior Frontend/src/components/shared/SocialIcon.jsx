import React from "react";

const SocialIcon = ({ icon }) => {
    return (
        <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden cursor-pointer group">
            {/* Hover background */}
            <span className="absolute bottom-0 left-0 w-full h-full bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>

            {/* Icon */}
            <span className="relative z-10 text-primary group-hover:text-white text-lg">{icon}</span>
        </div>
    );
};

export default SocialIcon;
