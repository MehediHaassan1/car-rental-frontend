import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/layouts/MainLayouts";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/About/About";
import Cars from "../pages/Cars/Cars";
import CarDetails from "../pages/Cars/CarDetails";
import NotFound from "../components/ui/NotFound";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ProtectedRoute from "../components/layouts/ProtectedRoute";
import Booking from "../pages/Booking/Booking";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Dashboard/Profile";
import MyBookings from "../pages/Dashboard/user/MyBookings";
import AllUsers from "../pages/Dashboard/admin/AllUsers";
import AllBookings from "../pages/Dashboard/admin/AllBookings";

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
                element: (
                    <ProtectedRoute>
                        <Booking />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/contact",
                element: <div>Contact us</div>,
            },
            {
                path: "/cars",
                element: <Cars />,
            },
            {
                path: "/car/:id",
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
        ],
    },
    {
        path: "/dashboard",
        element: (
            <ProtectedRoute>
                <DashboardLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "profile",
                element: <Profile />,
            },
            {
                path: "my-bookings",
                element: <MyBookings />,
            },
            {
                path: "all-users",
                element: <AllUsers />,
            },
            {
                path: "all-bookings",
                element: <AllBookings />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
