import { FaDribbble, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebook, FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 mt-10">
            <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <img
                            src="https://i.ibb.co/hX4MwS7/removedbglogo.png"
                            alt="RideEase Logo"
                        />

                        <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-400 sm:max-w-xs sm:mx-0 sm:text-left">
                            RideEase offers top-notch car rental services,
                            ensuring a seamless experience from booking to
                            return. We take pride in providing well-maintained
                            vehicles and exceptional customer service.
                        </p>

                        <ul className="flex justify-center gap-6 mt-8 md:gap-8 sm:justify-start">
                            <Link
                                to="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook className="text-2xl text-red-400" />
                            </Link>
                            <Link
                                to="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram className="text-2xl text-red-400" />
                            </Link>
                            <Link
                                to="https://www.twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaTwitter className="text-2xl text-red-400" />
                            </Link>
                            <Link
                                to="https://www.github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub className="text-2xl text-red-400" />
                            </Link>
                            <Link
                                to="https://www.dribbble.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaDribbble className="text-2xl text-red-400" />
                            </Link>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4">
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-white">
                                About Us
                            </p>

                            <nav className="mt-8">
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <Link
                                            className="text-white transition hover:text-white/75"
                                            to="/about"
                                        >
                                            Our Story
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="text-white transition hover:text-white/75"
                                            to="/team"
                                        >
                                            Meet the Team
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="text-white transition hover:text-white/75"
                                            to="/careers"
                                        >
                                            Careers
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="text-white transition hover:text-white/75"
                                            to="/blog"
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-white">
                                Our Services
                            </p>

                            <nav className="mt-8">
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <Link
                                            className="text-white transition hover:text-white/75"
                                            to="/services/rental"
                                        >
                                            Car Rental
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="text-white transition hover:text-white/75"
                                            to="/services/maintenance"
                                        >
                                            Vehicle Maintenance
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="text-white transition hover:text-white/75"
                                            to="/services/support"
                                        >
                                            24/7 Support
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="text-white transition hover:text-white/75"
                                            to="/services/insurance"
                                        >
                                            Insurance Plans
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-white">
                                Helpful Links
                            </p>

                            <nav className="mt-8">
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <Link
                                            className="text-white transition hover:text-white/75"
                                            to="/faqs"
                                        >
                                            FAQs
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="text-white transition hover:text-white/75"
                                            to="/support"
                                        >
                                            Customer Support
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="flex group justify-center sm:justify-start gap-1.5"
                                            to="/live-chat"
                                        >
                                            <span className="text-white transition group-hover:text-white/75">
                                                Live Chat
                                            </span>

                                            <span className="relative flex w-2 h-2 -mr-2">
                                                <span className="absolute inline-flex w-full h-full bg-teal-400 rounded-full opacity-75 animate-ping"></span>
                                                <span className="relative inline-flex w-2 h-2 bg-teal-500 rounded-full"></span>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-white">
                                Contact Us
                            </p>

                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <Link
                                        className="flex items-center justify-center sm:justify-start gap-1.5 group"
                                        to="mailto:info@rideease.com"
                                    >
                                        <IoMdMail className="text-xl text-gray-300" />
                                        <span className="text-white transition group-hover:text-white/75">
                                            info@rideease.com
                                        </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="flex items-center justify-center sm:justify-start gap-1.5 group"
                                        to="tel:+123456789"
                                    >
                                        <MdCall className="text-xl text-gray-300" />

                                        <span className="text-white transition group-hover:text-white/75">
                                            +1 234 567 89
                                        </span>
                                    </Link>
                                </li>

                                <li className="flex items-start justify-center gap-1.5 sm:justify-start">
                                    <FaLocationDot className="text-xl text-gray-300" />

                                    <p className="-mt-0.5 not-italic text-white">
                                        123 Main Street, London, United Kingdom
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-6 mt-12 border-t border-gray-800">
                    <div className="text-center sm:flex sm:justify-between sm:text-left">
                        <p className="text-sm text-gray-400">
                            <span className="block sm:inline">
                                All rights reserved.
                            </span>

                            <Link
                                className="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                                to="/terms"
                            >
                                Terms & Conditions
                            </Link>

                            <span>&middot;</span>

                            <Link
                                className="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                                to="/privacy"
                            >
                                Privacy Policy
                            </Link>
                        </p>

                        <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                            &copy; {new Date().getFullYear()} RideEase
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
