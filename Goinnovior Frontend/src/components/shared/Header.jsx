import React from "react";
import { CiLocationOn, CiMobile4 } from "react-icons/ci";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className="">
			<TopBar/>
			<Navbar/>
        </div>
    );
};

export default Header;
