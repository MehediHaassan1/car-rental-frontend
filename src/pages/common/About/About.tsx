import { GrServices } from "react-icons/gr";
import { FaInstagram, FaCar } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import { BiSolidDollarCircle } from "react-icons/bi";
import { MdAddCall } from "react-icons/md";

const AboutUs = () => {
    return (
        <div>
            {/* Main Content Section */}
            <div className="custom-container h-screen  grid items-center grid-cols-1 md:grid-cols-2 gap-10 bg-white">
                <div>
                    <span className="font-semibold px-4">FIND YOUR CAR</span>
                    <h4 className="text-4xl font-bold mt-2 px-4">
                        Welcome to{" "}
                        <span className="text-red-500">RideEase</span>
                    </h4>
                    <div>
                        <p className="mt-10 px-4">
                            At RideEase, we are committed to delivering an
                            unparalleled car ride experience tailored to your
                            needs. Our extensive features a diverse selection of
                            vehicles, from luxury sedans to versatile SUVs, all
                            at competitive prices.
                        </p>
                        <p className="mt-10 px-4">
                            Our seamless process is designed to make your
                            journey as smooth as possible, with transparent
                            pricing, flexible financing options, and thorough
                            vehicle inspections. At Drive Lux, our goal is not
                            just to meet but to exceed your expectations, making
                            your car buying experience both enjoyable and
                            stress-free.
                        </p>
                    </div>
                </div>
                <div>
                    <img
                        src="https://i.ibb.co/HNQCVBh/why-choose.png"
                        alt="Car Display"
                    />
                </div>
            </div>

            {/* Services Section */}
            <div className="bg-white">
                <div className="custom-container mx-auto p-6 md:p-12 grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white text-center p-6 md:p-10 shadow-md">
                        <BiSolidDollarCircle className="text-5xl mx-auto text-red-600 mb-4" />
                        <h2 className="text-lg md:text-xl font-semibold mb-2">
                            Hassle-Free Financing
                        </h2>
                        <p className="text-gray-600">
                            Our flexible financing options make it effortless
                            for you to drive away in your dream car. Benefit
                            from competitive rates and a smooth, hassle-free
                            approval process.
                        </p>
                    </div>

                    <div className="bg-red-800 text-center p-6 md:p-10 shadow-md">
                        <FaCar className="text-5xl text-white mx-auto mb-4" />
                        <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
                            All Major Car Brands
                        </h2>
                        <p className="text-gray-200">
                            Explore our extensive selection of luxury, family,
                            and everyday vehicles from top brands to find the
                            perfect car for your needs.
                        </p>
                    </div>

                    <div className="bg-white text-center p-6 md:p-10 shadow-md">
                        <GrServices className="text-5xl text-red-600 mx-auto mb-4" />
                        <h2 className="text-lg md:text-xl font-semibold mb-2">
                            Exceptional Quality Services
                        </h2>
                        <p className="text-gray-600">
                            Experience unparalleled service with our dedicated
                            team and high standards. We ensure your satisfaction
                            with every interaction, from start to finish.
                        </p>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-[#111827]">
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
                            <button className="bg-red-600 rounded duration-300 text-white px-4 py-2 hover:bg-red-700 transition">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Meet our Team */}
            <section className="bg-white text-center custom-container mt-10">
                <h2 className="text-[clamp(2.5rem,2.4286rem+2.2857vw,4rem)] font-semibold leading-none mb-4 capitalize text-gray-900">
                    our team
                </h2>
                <p className="max-w-3xl mx-auto text-[clamp(0.875rem,0.825rem+0.3vw,1.2rem)] leading-[1.7] text-gray-700">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Animi, praesentium veritatis voluptatibus ut consequuntur
                    quas consequatur omnis id rem obcaecati.
                </p>
                <div className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-[1.5rem] md:gap-[2rem] lg:gap-[3rem]">
                    <div className="relative text-left">
                        <div className="overflow-hidden rounded-t-md">
                            <img
                                className="filter grayscale transition duration-500 ease-in-out hover:filter-none h-96 w-full object-cover"
                                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Noah Wilson"
                            />
                        </div>
                        <a
                            href="#"
                            className="absolute left-0 bg-gray-900 p-4 inline-block text-white text-lg sm:text-xl lg:text-2xl hover:text-red-600 transition-all"
                        >
                            <FaInstagram />
                        </a>
                        <div className="ml-auto max-w-[90%]">
                            <a
                                href="#"
                                className="block bg-white p-[4rem_2rem_0_2.8rem] sm:p-[4.5rem_2rem_0_3rem] lg:p-[4.5rem_2rem_0_3.2rem] transition duration-500 ease-in-out hover:bg-red-100"
                            >
                                <h3 className="text-[clamp(1rem,1.1071rem+0.1714vw,1.2rem)] sm:text-[clamp(1.1rem,1.1071rem+0.1714vw,1.3rem)] font-extrabold capitalize text-red-900">
                                    noah wilson
                                </h3>
                                <p className="text-sm sm:text-base capitalize text-gray-700">
                                    marketing manager
                                </p>
                                <div className="text-right ">
                                    <BsArrowRight className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-red-600" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="relative text-left">
                        <div className="overflow-hidden rounded-t-md">
                            <img
                                className="filter grayscale transition duration-500 ease-in-out hover:filter-none h-96 w-full object-cover"
                                src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Noah Wilson"
                            />
                        </div>
                        <a
                            href="#"
                            className="absolute left-0 bg-gray-900 p-4 inline-block text-white text-lg sm:text-xl lg:text-2xl hover:text-red-600 transition-all"
                        >
                            <FaInstagram />
                        </a>
                        <div className="ml-auto max-w-[90%]">
                            <a
                                href="#"
                                className="block bg-white p-[4rem_2rem_0_2.8rem] sm:p-[4.5rem_2rem_0_3rem] lg:p-[4.5rem_2rem_0_3.2rem] transition duration-500 ease-in-out hover:bg-red-100"
                            >
                                <h3 className="text-[clamp(1rem,1.1071rem+0.1714vw,1.2rem)] sm:text-[clamp(1.1rem,1.1071rem+0.1714vw,1.3rem)] font-extrabold capitalize text-red-900">
                                    noah wilson
                                </h3>
                                <p className="text-sm sm:text-base capitalize text-gray-700">
                                    marketing manager
                                </p>
                                <div className="text-right ">
                                    <BsArrowRight className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-red-600" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="relative text-left">
                        <div className="overflow-hidden rounded-t-md">
                            <img
                                className="filter grayscale transition duration-500 ease-in-out hover:filter-none h-96 w-full object-cover"
                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Noah Wilson"
                            />
                        </div>
                        <a
                            href="#"
                            className="absolute left-0 bg-gray-900 p-4 inline-block text-white text-lg sm:text-xl lg:text-2xl hover:text-red-600 transition-all"
                        >
                            <FaInstagram />
                        </a>
                        <div className="ml-auto max-w-[90%]">
                            <a
                                href="#"
                                className="block bg-white p-[4rem_2rem_0_2.8rem] sm:p-[4.5rem_2rem_0_3rem] lg:p-[4.5rem_2rem_0_3.2rem] transition duration-500 ease-in-out hover:bg-red-100"
                            >
                                <h3 className="text-[clamp(1rem,1.1071rem+0.1714vw,1.2rem)] sm:text-[clamp(1.1rem,1.1071rem+0.1714vw,1.3rem)] font-extrabold capitalize text-red-900">
                                    noah wilson
                                </h3>
                                <p className="text-sm sm:text-base capitalize text-gray-700">
                                    marketing manager
                                </p>
                                <div className="text-right ">
                                    <BsArrowRight className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-red-600" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="relative text-left">
                        <div className="overflow-hidden rounded-t-md">
                            <img
                                className="filter grayscale transition duration-500 ease-in-out hover:filter-none h-96 w-full object-cover"
                                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Noah Wilson"
                            />
                        </div>
                        <a
                            href="#"
                            className="absolute left-0 bg-gray-900 p-4 inline-block text-white text-lg sm:text-xl lg:text-2xl hover:text-red-600 transition-all"
                        >
                            <FaInstagram />
                        </a>
                        <div className="ml-auto max-w-[90%]">
                            <a
                                href="#"
                                className="block bg-white p-[4rem_2rem_0_2.8rem] sm:p-[4.5rem_2rem_0_3rem] lg:p-[4.5rem_2rem_0_3.2rem] transition duration-500 ease-in-out hover:bg-red-100"
                            >
                                <h3 className="text-[clamp(1rem,1.1071rem+0.1714vw,1.2rem)] sm:text-[clamp(1.1rem,1.1071rem+0.1714vw,1.3rem)] font-extrabold capitalize text-red-900">
                                    noah wilson
                                </h3>
                                <p className="text-sm sm:text-base capitalize text-gray-700">
                                    marketing manager
                                </p>
                                <div className="text-right ">
                                    <BsArrowRight className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-red-600" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;