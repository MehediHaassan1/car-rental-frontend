import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const Hero = () => {
    return (
        <div className="bg-black min-h-screen md:h-screen flex flex-col justify-between md:flex-row">
            <div className="text-white custom-container w-full h-full flex flex-col justify-between md:flex-row">
                <div className="w-full md:w-1/2 h-3/5 md:h-full order-2 md:order-1 flex items-center justify-center">
                    <form className="md:w-5/6 w-full mx-auto">
                        <div className="w-full mb-5">
                            <label
                                htmlFor="start-location"
                                className="block mb-2 text-lg font-medium text-gray-400 dark:text-white"
                            >
                                Start Location
                            </label>
                            <select
                                id="start-location"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option>United States</option>
                                <option>Canada</option>
                                <option>France</option>
                                <option>Germany</option>
                            </select>
                        </div>
                        <div className="w-full mb-5">
                            <label
                                htmlFor="end-location"
                                className="block mb-2 text-lg font-medium text-gray-400 dark:text-white"
                            >
                                End Location
                            </label>
                            <select
                                id="end-location"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option>United States</option>
                                <option>Canada</option>
                                <option>France</option>
                                <option>Germany</option>
                            </select>
                        </div>
                        <div className="w-full mb-5 flex items-center justify-between gap-4">
                            <div className="w-full">
                                <label
                                    htmlFor="start-time"
                                    className="block mb-2 text-lg font-medium text-gray-400 dark:text-white"
                                >
                                    Start Time
                                </label>
                                <select
                                    id="start-time"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option>Morning</option>
                                    <option>Afternoon</option>
                                    <option>Evening</option>
                                    <option>Night</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="end-time"
                                    className="block mb-2 text-lg font-medium text-gray-400 dark:text-white"
                                >
                                    End Time
                                </label>
                                <select
                                    id="end-time"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option>Morning</option>
                                    <option>Afternoon</option>
                                    <option>Evening</option>
                                    <option>Night</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full border border-gray-300 p-2.5 flex items-center justify-center text-lg rounded">
                            <button className="text-lg">Search</button>
                        </div>
                    </form>
                </div>
                <div className="w-full md:w-1/2 h-2/5 md:h-full order-1 md:order-2">
                    <Swiper
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        loop={true}
                        modules={[Autoplay, Navigation]}
                        className="w-full h-full"
                    >
                        <SwiperSlide>
                            <img
                                className="w-full h-full object-cover"
                                src="https://images.unsplash.com/photo-1524102724373-bcf6ed410592?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUyfHxjYXJ8ZW58MHwwfDB8fHww"
                                alt="Slide 1"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className="w-full h-full object-cover"
                                src="https://images.unsplash.com/photo-1506610654-064fbba4780c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGNhcnxlbnwwfDB8MHx8fDA%3D"
                                alt="Slide 2"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className="w-full h-full object-cover"
                                src="https://images.unsplash.com/photo-1481130763351-e3d9667e3087?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGNhcnxlbnwwfDB8MHx8fDA%3D"
                                alt="Slide 3"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className="w-full h-full object-cover"
                                src="https://images.unsplash.com/photo-1441148489547-da3f133be9ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGNhcnxlbnwwfDB8MHx8fDA%3D"
                                alt="Slide 4"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className="w-full h-full object-cover"
                                src="https://images.unsplash.com/photo-1541443131876-44b03de101c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGNhcnxlbnwwfDB8MHx8fDA%3D"
                                alt="Slide 5"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Hero;
