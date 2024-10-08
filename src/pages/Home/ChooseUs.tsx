import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { MdAddCall } from "react-icons/md";
import { Link } from "react-router-dom";

const ChooseUs = () => {
    return (
        <>
            <div className="min-h-screen w-full flex flex-col md:flex-row md:gap-4 lg:gap-8">
                <div className="md:w-1/2 flex items-center justify-between">
                    <img
                        className="w-full h-full md:h-4/6 object-cover"
                        src="https://i.ibb.co/HNQCVBh/why-choose.png"
                        alt="why choose us"
                    />
                </div>
                <div className="p-4 md:w-1/2 z-10 flex items-center justify-center">
                    <div>
                        <h1 className="bg-red-100 uppercase w-fit rounded px-10 py-2 text-md font-semibold text-red-500">
                            why choose us
                        </h1>
                        <h1 className="text-4xl lg:w-3/4 font-semibold my-6">
                            We offer the best experience with our rental deals
                        </h1>
                        <div>
                            <div className="flex gap-4 items-center justify-start mb-4">
                                <div className="p-2 bg-red-100 rounded bg-opacity-80">
                                    <FaHandHoldingDollar className="size-8 text-red-500 " />
                                </div>
                                <div>
                                    <h1 className="text-lg font-semibold">
                                        Best price guaranteed
                                    </h1>
                                    <p className="text-[#6D6D6D] w-5/6 lg:w-3/4 mt-2">
                                        Find a lower price? We’ll refund you
                                        100% of the difference.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center justify-start mb-4">
                                <div className="p-2 bg-red-100 rounded bg-opacity-80">
                                    <FaUserCheck className="size-8 text-red-500 " />
                                </div>
                                <div>
                                    <h1 className="text-lg font-semibold">
                                        Experience driver
                                    </h1>
                                    <p className="text-[#6D6D6D] w-5/6 lg:w-3/4 mt-2">
                                        Don’t have driver? Don’t worry, we have
                                        many experienced driver for you.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center justify-start mb-4">
                                <div className="p-2 bg-red-100 rounded bg-opacity-80">
                                    <IoTime className="size-8 text-red-500 " />
                                </div>
                                <div>
                                    <h1 className="text-lg font-semibold">
                                        24 hour services
                                    </h1>
                                    <p className="text-[#6D6D6D] w-5/6 lg:w-3/4 mt-2">
                                        Book your car anytime and we will make
                                        sure your safe ride to your direction.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#111827]">
                {/* Call to Action Section */}
                <div className="py-6 md:py-10 mt-10 custom container">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <div className="space-y-4 md:space-y-6 text-center md:text-left">
                            <h2 className="text-white  text-2xl md:text-4xl font-semibold">
                                Get a Free Car Inspection
                            </h2>
                            <p className="text-white  text-sm md:text-base">
                                Book your free inspection today and keep your
                                vehicle in top shape. Our team of experts is
                                committed to delivering the best service for
                                your car's needs.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row justify-center md:justify-end items-center space-y-4 md:space-y-0 md:space-x-8">
                            <div className="text-center md:text-left">
                                <p className="text-gray-400 text-sm md:text-base">
                                    Call Us to Book Your Inspection
                                </p>
                                <span className="flex justify-center md:justify-start items-center text-white">
                                    <MdAddCall className="mr-2" />
                                    <p className="text-base">
                                        +1 (555) 123-467
                                    </p>
                                </span>
                            </div>
                            <Link
                                to="/cars"
                                className="bg-red-600 rounded duration-300 text-white px-4 py-2 hover:bg-red-700 transition"
                            >
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChooseUs;
