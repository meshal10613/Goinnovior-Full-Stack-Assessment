import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdLocationOn, MdPhone } from "react-icons/md";
import SocialIcon from "./SocialIcon";

const TopBar = () => {
    return (
        <div className="w-full bg-secondary text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-row items-center justify-between h-auto gap-2 md:gap-0">
                    {/* Left Section */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 text-sm">
                        <div className="flex items-center gap-1">
                            <MdLocationOn className="text-lg" />
                            <span>Kashimpur, Gazipur Sadar / Gazipur</span>
                        </div>

                        <div className="hidden sm:block w-px h-4 bg-white/50" />

                        <div className="flex items-center gap-1">
                            <MdPhone className="text-lg" />
                            <span>+880 01713-027875</span>
                        </div>
                    </div>

                    {/* Right Section (Social Icons) */}
                    <div className="flex items-center bg-white h-full">
                        <SocialIcon icon={<FaFacebookF />} />
                        <SocialIcon icon={<FaTwitter />} />
                        <SocialIcon icon={<FaInstagram />} />
                        <SocialIcon icon={<FaYoutube />} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
