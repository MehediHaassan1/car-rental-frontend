import { Avatar, Button, Dropdown, MenuProps } from "antd";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Links = [
    { path: "/", name: "home" },
    { path: "/rent-car", name: "rent car" },
    { path: "/car", name: "car" },
    { path: "/about-us", name: "about us" },
    { path: "/booking", name: "booking" },
    { path: "/contact", name: "contact us" },
];

const items: MenuProps["items"] = [
    {
        key: "1",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
            >
                1st menu item
            </a>
        ),
    },
    {
        key: "2",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aliyun.com"
            >
                2nd menu item
            </a>
        ),
    },
    {
        key: "3",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.luohanacademy.com"
            >
                3rd menu item
            </a>
        ),
    },
];

const NavBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const user = false;

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
                        {user ? (
                            <Dropdown
                                trigger={["click"]}
                                menu={{ items }}
                                placement="bottom"
                            >
                                <Button
                                    style={{
                                        border: "none",
                                        padding: 2,
                                        borderRadius: "100%",
                                    }}
                                    type="text"
                                >
                                    <Avatar
                                        size={48}
                                        icon={<FaUser />}
                                        className="rounded-full h-10 w-10"
                                    />
                                </Button>
                            </Dropdown>
                        ) : (
                            <div className="lg:block md:block hidden">
                                <div className="flex items-center font-medium">
                                    <Link to="/login">Login</Link>
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
