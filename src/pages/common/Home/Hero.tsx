import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const Hero = () => {
    return (
        <div className="bg-black h-screen flex items-center justify-center">
            <div className="text-white custom-container w-full h-full flex items-center justify-center">
                <div className="w-[90%] h-[75%] flex items-center justify-between">
                    <div className="h-full w-1/2 flex items-center justify-center">
                        <form className="w-5/6 mx-auto">
                            <div className="w-full mb-5">
                                <label
                                    htmlFor="countries"
                                    className="block mb-2 text-lg font-medium text-gray-400 dark:text-white"
                                >
                                    Start Location
                                </label>
                                <select
                                    id="countries"
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
                                    htmlFor="countries"
                                    className="block mb-2 text-lg font-medium text-gray-400 dark:text-white"
                                >
                                    End Location
                                </label>
                                <select
                                    id="countries"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>France</option>
                                    <option>Germany</option>
                                </select>
                            </div>
                            <div className="w-full mb-5 flex items-center justify-between gap-4">
                                <div className="w-full mb-5">
                                    <label
                                        htmlFor="countries"
                                        className="block mb-2 text-lg font-medium text-gray-400 dark:text-white"
                                    >
                                        Start Time
                                    </label>
                                    <select
                                        id="countries"
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
                                        htmlFor="countries"
                                        className="block mb-2 text-lg font-medium text-gray-400 dark:text-white"
                                    >
                                        End Time
                                    </label>
                                    <select
                                        id="countries"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>France</option>
                                        <option>Germany</option>
                                    </select>
                                </div>
                            </div>
                            <div className="w-full border border-gray-300 p-2.5 flex items-center justify-center text-lg rounded">
                                <button className="text-lg">Search</button>
                            </div>
                        </form>
                    </div>
                    <div className="h-full w-1/2">
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
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://images.unsplash.com/photo-1506610654-064fbba4780c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGNhcnxlbnwwfDB8MHx8fDA%3D"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://images.unsplash.com/photo-1481130763351-e3d9667e3087?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGNhcnxlbnwwfDB8MHx8fDA%3D"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://images.unsplash.com/photo-1441148489547-da3f133be9ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGNhcnxlbnwwfDB8MHx8fDA%3D"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://images.unsplash.com/photo-1541443131876-44b03de101c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGNhcnxlbnwwfDB8MHx8fDA%3D"
                                    alt=""
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
