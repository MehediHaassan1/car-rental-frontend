import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/layouts/MainLayouts";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/About/About";
import Cars from "../pages/Cars/Cars";
import CarDetails from "../pages/Cars/CarDetails";
import NotFound from "../components/ui/NotFound";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

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
            {
                path: "/car",
                element: <CarDetails />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

export default router;
