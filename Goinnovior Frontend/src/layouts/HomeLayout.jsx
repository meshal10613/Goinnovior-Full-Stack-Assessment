import React from "react";
import { Outlet } from "react-router";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const HomeLayout = () => {
    return (
        <div className="">
            <Header />
            <div className="min-h-[calc(100vh - 590px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default HomeLayout;
