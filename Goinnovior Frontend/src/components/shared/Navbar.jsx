import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router";
import NavbarActions from "./NavbarActions";

const Navbar = () => {
    const links = (
        <>
            <li>
                <NavLink to={`/`}>Home</NavLink>
            </li>
            <li>
                <NavLink to={`/about-us`}>About Us</NavLink>
            </li>
            <li className="relative">
                <details className="group">
                    <summary className="cursor-pointer list-none flex items-center gap-1 hover:text-primary transition-colors bg-transparent">
                        Our Services
                    </summary>

                    <ul className="absolute mt-2 w-44 rounded-md shadow-lg p-2 z-50">
                        <li>
                            <NavLink to="/service-1">Service One</NavLink>
                        </li>
                        <li>
                            <NavLink to="/service-2">Service Two</NavLink>
                        </li>
                    </ul>
                </details>
            </li>
            <li className="relative">
                <details className="group">
                    <summary className="cursor-pointer list-none flex items-center gap-1 hover:text-primary transition-colors bg-transparent">
                        Our Products
                        {/* <span className="transition-transform group-open:rotate-180">
                            ▾
                        </span> */}
                    </summary>

                    <ul className="absolute mt-2 w-44 rounded-md bg-base-100 shadow-lg p-2 z-50">
                        <li>
                            <NavLink to="/service-1">Product One</NavLink>
                        </li>
                        <li>
                            <NavLink to="/service-2">Product Two</NavLink>
                        </li>
                    </ul>
                </details>
            </li>
            <li>
                <NavLink to={`/blogs`}>Blogs</NavLink>
            </li>
        </>
    );
    return (
        <div className="max-w-300 mx-auto">
            <div className="container mx-auto">
                <div className="navbar px-0">
                    <div className="flex items-center flex-1 px-0">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {" "}
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />{" "}
                                </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow navlink"
                            >
                                {links}
                            </ul>
                        </div>
                        <img src={logo} alt="logo" className="w-20" />
                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 navlink gap-4">
                                {links}
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <NavbarActions />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
