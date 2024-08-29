import { Avatar, Dropdown, MenuProps, Space } from "antd";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { removeUser } from "../../redux/features/auth/authSlice";
import { useGetMeQuery } from "../../redux/features/user/userApi";

const NavBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { token } = useAppSelector((state) => state.auth);
    const { data: user } = useGetMeQuery(undefined);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    // const {user} = useSelector
    const dispatch = useAppDispatch();

    const handleLogOut = () => {
        dispatch(removeUser());
    };

    const items: MenuProps["items"] = [
        {
            key: "1",
            label: <Link to="/dashboard">Dashboard</Link>,
        },
        {
            key: "2",
            label: <button>Profile</button>,
        },
        {
            key: "3",
            label: <button onClick={handleLogOut}>Logout</button>,
        },
    ];

    const Links = [
        { path: "/", name: "home" },
        ...(token ? [{ path: "/booking", name: "booking" }] : []),
        { path: "/cars", name: "cars" },
        { path: "/about-us", name: "about us" },
        { path: "/contact", name: "contact us" },
    ];

    return (
        <nav>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/">
                            <img
                                src="https://i.ibb.co/ggswRNv/car-logo.png"
                                alt="logo"
                                className="w-4/5"
                            />
                        </Link>
                    </div>

                    <div className="hidden lg:flex items-center gap-7">
                        {Links.map((item, idx) => (
                            <Link
                                key={idx}
                                to={item.path}
                                className={`rounded text-base font-medium px-2 py-1 ${
                                    location.pathname === item.path
                                        ? "bg-red-100 text-red-600 "
                                        : "text-zinc-900"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        {token ? (
                            <Dropdown
                                trigger={["click"]}
                                menu={{ items }}
                                placement="bottom"
                                className="hover:cursor-pointer"
                            >
                                {user?.data?.image ? (
                                    <Space size={48} wrap>
                                        <Avatar
                                            size={48}
                                            src={user?.data?.image}
                                            
                                        />
                                    </Space>
                                ) : (
                                    <Space size={16} wrap>
                                        <Avatar
                                            size={64}
                                            style={{ fontSize: "32px" }}
                                            className="bg-red-200 font-bold text-black"
                                        >
                                            {user?.data?.name?.slice(0, 1)}
                                        </Avatar>
                                    </Space>
                                )}
                            </Dropdown>
                        ) : (
                            <div className="lg:block md:block hidden">
                                <div className="flex items-center font-medium">
                                    <Link
                                        to="/login"
                                        className="w-full block bg-red-500 hover:bg-red-600 focus:bg-red-500 text-white font-semibold rounded
                px-4 py-2 duration-300"
                                    >
                                        Login
                                    </Link>
                                </div>
                            </div>
                        )}

                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-red-600 lg:hidden focus:outline-none"
                            onClick={toggleSidebar}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`fixed inset-0 z-40 bg-gray-800 bg-opacity-75 transition-opacity duration-300 ${
                    isSidebarOpen
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                }`}
                onClick={closeSidebar}
            >
                <div
                    className={`fixed inset-y-0 left-0 w-64 bg-white p-4 transform transition-transform duration-300 ${
                        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        type="button"
                        className="text-red-600 mb-4 focus:outline-none"
                        onClick={closeSidebar}
                    >
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <div className="space-y-3">
                        {Links.map((item, idx) => (
                            <Link
                                key={idx}
                                to={item.path}
                                className={`block border text-red-600 px-3 py-2 rounded-md text-base font-medium ${
                                    location.pathname === item.path
                                        ? "bg-red-100"
                                        : "bg-white"
                                }`}
                                onClick={closeSidebar}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
