import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { GoShareAndroid } from "react-icons/go";

const Apparels = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/api/v1/products")
            .then((res) => res.json())
            .then((data) => setData(data.data));
    }, [data]);
	
    return (
        <div className="max-w-300 mx-auto my-10">
            <div className="container">
                <div className="flex items-center justify-between mb-5">
                    <h2 className="font-bold text-3xl">Our Apparels</h2>
                    <Link to="/all-products" className="underline">
                        See All Products
                    </Link>
                </div>

                <div className="grid grid-cols-4 gap-3">
                    {data.map((product, index) => (
                        <div
                            key={index}
                            className="p-2 rounded-md space-y-3 group hover:shadow-md"
                        >
                            <div className="overflow-hidden rounded-md relative">
                                <img
                                    src={product.img}
                                    alt=""
                                    className="rounded-md transition-all group-hover:scale-120"
                                />
                                <div className="absolute -right-10 group-hover:right-3 top-2 transition-all flex flex-col items-center gap-3">
                                    <div className="rounded-full p-2 bg-white cursor-pointer">
                                        <FaRegHeart size={20} className="text-primary" />
                                    </div>
                                    <div className="rounded-full p-2 bg-white cursor-pointer">
                                        <IoEyeOutline size={20} className="text-primary" />
                                    </div>
                                    <div className="rounded-full p-2 bg-white cursor-pointer">
                                        <GoShareAndroid size={20} className="text-primary" />
                                    </div>
                                </div>
                            </div>
                            <h2 className="font-semibold text-xl">
                                {product.name}
                            </h2>
                            <p className="font-semibold text-2xl">
                                ৳{product.min_price} - ৳{product.max_price}
                            </p>
                            <div className="flex items-center justify-between gap-3">
                                <button className="btn w-[48%] bg-accent text-secondary border-none">
                                    <BsCart3 size={15} /> Add To Cart
                                </button>
                                <button className="btn w-[48%] bg-secondary text-white border-none">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Apparels;
