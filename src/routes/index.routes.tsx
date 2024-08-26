import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/layouts/MainLayouts";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/About/About";
import Cars from "../pages/Cars/Cars";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about-us",
                element: <AboutUs />,
            },
            {
                path: "/booking",
                element: <div>This is booking</div>,
            },
            {
                path: "/contact",
                element: <div>Contact us</div>,
            },
            {
                path: "/rent-car",
                element: <Cars />,
            },
        ],
    },
]);

export default router;
