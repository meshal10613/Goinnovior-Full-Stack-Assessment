import React, { useState } from "react";
import logoT from "../assets/logo-t.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

const Auth = () => {
    const [isLogin, SetIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (isLogin) {
            console.log("login", email, password);
        } else {
            console.log("signup", email, password);
        }
    };

    return (
        <>
            <div className="modal-box max-w-10/12 md:max-w-8/12 min-h-8/12 rounded-3xl m-0">
                <div className="rounded-3xl border border-white bg-linear-to-b from-secondary to-white p-5 md:p-10 relative">
                    <div className="flex items-center justify-between">
                        <img src={logoT} alt="" className="w-20" />
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => SetIsLogin(!isLogin)}
                                className={`px-5 py-2 rounded-full text-white font-medium ${
                                    isLogin ? "border border-white" : ""
                                }`}
                            >
                                Login
                            </button>
                            <button
                                onClick={() => SetIsLogin(!isLogin)}
                                className={`px-5 py-2 rounded-full text-white ${
                                    isLogin ? "" : "border border-white"
                                }`}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>

                    {/* Content Container */}
                    <div className="flex flex-col items-center mt-10">
                        <h1 className="text-3xl font-bold text-white">
                            Welcome Back!
                        </h1>
                        <p className="text-gray-100 text-sm mt-2">
                            We missed you, Please provide your credential
                        </p>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 w-full max-w-md space-y-4"
                        >
                            <div className="relative">
                                <input
                                    name="email"
                                    type="email"
                                    className="w-full rounded-md py-3 px-4 bg-white focus:outline-none peer"
                                    required
                                />
                                <span
                                    className="absolute text-gray-500 left-3 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none 
									transition-opacity
									peer-focus:opacity-0
									peer-valid:opacity-0
									opacity-100"
                                >
                                    <IoIosMail size={15} /> Email
                                </span>
                            </div>

                            <div className="relative">
                                <input
                                    name="password"
                                    type={showPassword ? "password" : "text"}
                                    className="w-full rounded-md py-3 px-4 bg-white focus:outline-none peer"
                                    required
                                />
                                <span
                                    className="absolute text-gray-500 left-3 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none 
									transition-opacity
									peer-focus:opacity-0
									peer-valid:opacity-0
									opacity-100"
                                >
                                    <MdLockOutline size={15} /> Password
                                </span>
                                <span
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                                >
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </div>

                            <div className="flex justify-end">
                                <a href="#" className="text-gray-700 text-sm">
                                    Forgot Password?
                                </a>
                            </div>

                            <button
                                type="submit"
                                className="bg-secondary text-white w-full py-3 rounded-md font-semibold hover:bg-teal-600 cursor-pointer"
                            >
                                {isLogin ? "Log In" : "Sign Up"}
                            </button>

                            <div className="flex items-center my-4">
                                <div className="grow h-px bg-gray-300"></div>
                                <span className="px-4 text-gray-700 text-sm">
                                    or
                                </span>
                                <div className="grow h-px bg-gray-300"></div>
                            </div>

                            <div className="grid grid-cols-3 gap-3">
                                <button className="flex justify-center items-center py-2 bg-white shadow rounded-md">
                                    📘
                                </button>
                                <button className="flex justify-center items-center py-2 bg-white shadow rounded-md">
                                    
                                </button>
                                <button className="flex justify-center items-center py-2 bg-white shadow rounded-md">
                                    🟢
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Auth;
