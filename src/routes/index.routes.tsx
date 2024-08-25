import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/layouts/MainLayouts";
import Home from "../pages/common/Home/Home";

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
                element: <div>About us</div>,
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
