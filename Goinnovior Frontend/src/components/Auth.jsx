import React, { useState } from "react";
import logoT from "../assets/logo-t.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import facebook from "../assets/fb.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";

const Auth = () => {
    const axios = useAxios();
    const [isLogin, SetIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const email = e.target.email.value;
        const password = e.target.password.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
        }

        setError("");
        if (isLogin) {
            try {
                const res = await axios.post("/api/v1/auth/login", {
                    email,
                    password,
                });
                setLoading(false);
                await document.getElementById("my_modal_2").close();
                Swal.fire({
                    title: "Congratulations!",
                    text: `${res.data.message}`,
                    icon: "success",
                    confirmButtonColor: "#07b4b0",
                });
            } catch (error) {
                setLoading(false);
                setError(error.response.data.message);
            }
        } else {
            try {
                const res = await axios.post("/api/v1/auth/register", {
                    email,
                    password,
                });
                setLoading(false);
                await document.getElementById("my_modal_2").close();
                Swal.fire({
                    title: "Congratulations!",
                    text: `${res.data.message}. Please login to continue`,
                    icon: "success",
                    confirmButtonColor: "#07b4b0",
                });
            } catch (error) {
                setLoading(false);
                setError(error.response.data.message);
            }
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
                                className={`px-5 py-2 rounded-full text-white cursor-pointer ${
                                    isLogin
                                        ? "border border-white font-medium"
                                        : ""
                                }`}
                            >
                                Login
                            </button>
                            <button
                                onClick={() => SetIsLogin(!isLogin)}
                                className={`px-5 py-2 rounded-full text-white cursor-pointer ${
                                    isLogin
                                        ? ""
                                        : "border border-white font-medium"
                                }`}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>

                    {/* Content Container */}
                    <div className="flex flex-col items-center mt-10">
                        <h1 className="text-3xl font-bold text-white">
                            {isLogin ? "Welcome Back!" : "Create Your Account"}
                        </h1>
                        <p className="text-gray-100 text-sm mt-2">
                            {isLogin
                                ? "We missed you, Please provide your credential"
                                : "Join us today! Fill in your details to get started."}
                        </p>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 w-full max-w-md space-y-4"
                        >
                            {/* email */}
                            <div className="relative">
                                <input
                                    name="email"
                                    type="text"
                                    className="w-full rounded-md text-gray-500 py-3 px-4 bg-white focus:outline-none peer"
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

                            {/* password */}
                            <div className="relative">
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    className="w-full rounded-md text-gray-500 py-3 px-4 bg-white focus:outline-none peer"
                                    required
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    onFocus={() => setFocused(true)}
                                    onBlur={() => setFocused(false)}
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

                                {(focused || value) && (
                                    <span
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                                    >
                                        {showPassword ? (
                                            <FaEye />
                                        ) : (
                                            <FaEyeSlash />
                                        )}
                                    </span>
                                )}
                            </div>

                            <div className="flex justify-end">
                                <a
                                    href="#"
                                    className="text-gray-700 text-sm hover:underline"
                                >
                                    Forgot Password?
                                </a>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="bg-secondary text-white w-full py-3 rounded-md font-semibold hover:bg-teal-600 cursor-pointer"
                                >
                                    {loading ? (
                                        <div className="loading loading-spinner"></div>
                                    ) : isLogin ? (
                                        "Log In"
                                    ) : (
                                        "Sign Up"
                                    )}
                                </button>
                                {error && (
                                    <p className="text-red-500 text-base">
                                        {error}
                                    </p>
                                )}
                            </div>

                            <div className="flex items-center my-4">
                                <div className="grow h-px bg-gray-300"></div>
                                <span className="px-15 text-gray-700 text-sm">
                                    or
                                </span>
                                <div className="grow h-px bg-gray-300"></div>
                            </div>

                            <div className="grid grid-cols-3 gap-3">
                                <button className="flex justify-center items-center py-2 bg-white shadow rounded-md cursor-pointer">
                                    <img
                                        src={facebook}
                                        alt="facebook"
                                        className="w-fit"
                                    />
                                </button>
                                <button className="flex justify-center items-center py-2 bg-white shadow rounded-md cursor-pointer">
                                    <img
                                        src={apple}
                                        alt="apple"
                                        className="w-fit"
                                    />
                                </button>
                                <button className="flex justify-center items-center py-2 bg-white shadow rounded-md cursor-pointer">
                                    <img
                                        src={google}
                                        alt="google"
                                        className="w-fit"
                                    />
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
