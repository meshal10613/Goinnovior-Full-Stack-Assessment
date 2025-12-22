import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Home";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
		errorElement: <ErrorPage/>,
		children: [
			{
				index: true,
				element: <Home/>
			}
		],
    },
]);
