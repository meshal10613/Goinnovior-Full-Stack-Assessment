import React from "react";
import Lottie from "lottie-react";
import errorLogo from "../assets/lottie/error.json";
import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex flex-col items-center justify-center gap-3 max-h-screen mt-10">
            <Lottie animationData={errorLogo} loop={true} className="w-98" />
            <h2 className="text-2xl">{error.error.message}</h2>
            <Link
                to={`/`}
                className="btn bg-primary text-white rounded-none text-lg font-medium"
            >
                Back to home
            </Link>
        </div>
    );
};

export default ErrorPage;
