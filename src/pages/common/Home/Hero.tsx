import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const sliderItems = [
    {
        title: "Explore New Roads",
        subtitle1: "ADVENTURE AWAITS",
        subtitle2: "Rent a Car for Your Next Road Trip",
        image: "https://i.ibb.co/5LkJG9G/slide-Five.jpg",
    },
    {
        title: "Performance on Wheels",
        subtitle1: "DRIVE IN STYLE",
        subtitle2: "Choose from High-Performance Rental Cars",
        image: "https://i.ibb.co/4fGCXPg/slide-Four.jpg",
    },
    {
        title: "Instant Car Rental",
        subtitle1: "BOOK NOW | DRIVE AWAY",
        subtitle2: "Quick and Easy Car Rentals for Immediate Use",
        image: "https://i.ibb.co/ckdS0sd/slideOne.jpg",
    },
    {
        title: "Luxury Car Experience",
        subtitle1: "DRIVE IN COMFORT",
        subtitle2: "Experience Opulence with Our Premium Car Rentals",
        image: "https://i.ibb.co/747DwBy/slide-Three.jpg",
    },
    {
        title: "Reliable Rides",
        subtitle1: "DEPENDABLE TRANSPORT",
        subtitle2: "Enjoy Peace of Mind with Our Well-Maintained Vehicles",
        image: "https://i.ibb.co/DC3J4fN/slideTwo.jpg",
    },
];

const Hero = () => {
    return (
        <Swiper
            navigation={true}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="h-[600px] w-full my-8 md:my-12"
        >
            {sliderItems.map((item, idx) => {
                return (
                    <SwiperSlide key={idx}>
                        <div className="relative h-full w-full">
                            <img
                                className="w-full h-full object-cover"
                                src={item.image}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-white text-center">
                                    <p className="text-sm md:text-lg lg:text-xl mb-6">
                                        {item.subtitle1}
                                    </p>
                                    <h2 className="text-3xl md:text-4xl lg:text-6xl mb-4">
                                        {item.title}
                                    </h2>
                                    <p className="text-sm md:text-lg lg:text-xl mb-8">
                                        {item.subtitle2}
                                    </p>
                                    <button className="bg-red-500 rounded py-3 px-5 text-xl hover:scale-110 duration-300">
                                        Book now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default Hero;
