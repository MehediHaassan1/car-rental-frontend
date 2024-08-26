import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/layouts/MainLayouts";
import Home from "../pages/common/Home/Home";
import AboutUs from "../pages/common/About/About";

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
        ],
    },
]);

export default router;
