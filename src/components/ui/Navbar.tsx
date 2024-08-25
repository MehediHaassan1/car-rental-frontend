import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="relative bg-white z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link to="/">
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src="https://i.ibb.co/ggswRNv/car-logo.png"
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <Hamburger toggled={open} toggle={setOpen} />
                        </div>
                        <nav className="hidden md:flex space-x-10">
                            <Link
                                to="/"
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                            >
                                home
                            </Link>
                            <Link
                                to="/about-us"
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                            >
                                about us
                            </Link>
                            <Link
                                to="/booking"
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                            >
                                booking
                            </Link>
                            <Link
                                to="/contact"
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                            >
                                contact
                            </Link>
                        </nav>
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <a
                                href="#"
                                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                            >
                                Sign in
                            </a>
                            <a
                                href="#"
                                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Sign up
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        open
                            ? "opacity-100 scale-100 ease-out duration-200 absolute top-0 inset-x-0 p-0 transition transform origin-top-right md:hidden"
                            : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    }
                >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="p-2">
                            <div className="flex items-center justify-end">
                                <div className="mt-2 mr-2.5">
                                    <Hamburger
                                        toggled={open}
                                        toggle={setOpen}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div>
                                <h2 className="text-lg font-medium text-gray-900">
                                    Pricing
                                </h2>
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Sign up
                                </a>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    Existing customer?
                                    <a
                                        href="#"
                                        className="text-indigo-600 hover:text-indigo-500"
                                    >
                                        Sign in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
