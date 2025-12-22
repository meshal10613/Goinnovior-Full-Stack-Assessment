import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { TbLocation } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import LocationLink from "../LocationLink";
import { MdOutlineContentCopy } from "react-icons/md";
import { Link, NavLink } from "react-router";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import visa from "../../assets/bank/visa.png";
import mastercard from "../../assets/bank/mastercard.png";
import nogod from "../../assets/bank/nogod.png";
import bkash from "../../assets/bank/bkash.png";
import rocket from "../../assets/bank/rocket.png";
import upay from "../../assets/bank/upay.png";
import sure from "../../assets/bank/sure-cash.png";
import taptap from "../../assets/bank/taptap.png";
import cellfin from "../../assets/bank/cellfin.png";
import dbbl from "../../assets/bank/dbbl.png";
import city from "../../assets/bank/city.png";
import islami from "../../assets/bank/islami.png";
import brac from "../../assets/bank/brac.png";
import ucb from "../../assets/bank/ucb.png";

const Footer = () => {
    const email = "info@zaheen.com";
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard
            .writeText(email)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1500); // reset after 1.5s
            })
            .catch((err) => console.error("Failed to copy: ", err));
    };

    const banks = [visa, mastercard, nogod, bkash, rocket, upay, sure, taptap, cellfin, dbbl, city, islami, brac, ucb];

    return (
        <div className="bg-[#F7F7F7]">
            <div className="max-w-300 mx-auto py-10 px-3 lg:px-0">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
                    {/* 1st column */}
                    <div>
                        <img
                            src={logo}
                            alt="logo-footer"
                            className="w-32 mb-6"
                        />
                        <LocationLink location="29 SE 2nd Ave, Miami Florida 33131, United States" />
                        <div className="mb-2 flex items-center gap-1">
                            <CiMail size={20} />
                            <span className="font-light text-[14px]">
                                {email}
                            </span>
                            <span
                                className="relative left-1 cursor-pointer"
                                onClick={handleCopy}
                            >
                                <MdOutlineContentCopy />
                            </span>
                            {copied && (
                                <span className="ml-2 text-primary text-sm">
                                    Copied!
                                </span>
                            )}
                        </div>
                    </div>
                    {/* 2nd column */}
                    <div className="flex items-center gap-28">
                        <div>
                            <h2 className="mb-4 font-semibold">Pages</h2>
                            <ul className="font-light navlink">
                                <li>
                                    <NavLink to={`/about-us`}>About Us</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/our-services`}>
                                        Our Services
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/our-products`}>
                                        Our Products
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 font-semibold">Information</h2>
                            <ul className="font-light navlink">
                                <li>
                                    <NavLink to={`/my-account`}>
                                        My Account
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/corporate-enquires`}>
                                        Corporate Enquires
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/faqs`}>FAQs</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

				<div className="my-5">
					<h2 className="font-semibold">(+92) 3942 7879</h2>
				</div>
				<div className="">
					<h2 className="font-semibold">Payment Channels</h2>
                    <div className="flex flex-wrap gap-3 items-center">
                        {
                            banks.map((b) => 
                                <img src={b} alt={b} key={b} className="w-20 h-10"/>
                            )
                        }
                    </div>
				</div>

				<div className="divider"></div>
				<div className="flex items-center justify-between">
					<h2>Copyright © <span className="text-yellow-400">360D Soul Limited</span> 2025. All rights reserved.</h2>
					<div className="flex items-center gap-10">
						<FaFacebookF size={20} className="cursor-pointer" />
						<FaTwitter size={20} className="cursor-pointer" />
						<FaInstagram size={20} className="cursor-pointer" />
					</div>
					<div className="flex items-center gap-10">
						<Link>Teams & Condition </Link>
						<Link>Privacy & Policy</Link>
						<Link>Refund Policy</Link>
					</div>
				</div>
            </div>
        </div>
    );
};

export default Footer;
