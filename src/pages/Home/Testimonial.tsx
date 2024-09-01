import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination,Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

const Testimonial = () => {
    const testimonials = [
        {
            name: "Kevin Martin",
            role: "Customer",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            text: "I Was Very Impressed Lorem posuere in miss drana en the nisan semere scerium amiss etiam ornare in the miss drana is lorem fermen nunt mauris.",
            rating: 5,
        },
        {
            name: "Devid Cullen",
            role: "Customer",
            image: "https://randomuser.me/api/portraits/men/33.jpg",
            text: "I Was Very Impressed Lorem posuere in miss drana en the nisan semere scerium amiss etiam ornare in the miss drana is lorem fermen nunt mauris.",
            rating: 5,
        },
        {
            name: "Pitar Has",
            role: "Customer",
            image: "https://randomuser.me/api/portraits/men/34.jpg",
            text: "I Was Very Impressed Lorem posuere in miss drana en the nisan semere scerium amiss etiam ornare in the miss drana is lorem fermen nunt mauris.",
            rating: 5,
        },
        {
            name: "Kevin Martin",
            role: "Customer",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            text: "I Was Very Impressed Lorem posuere in miss drana en the nisan semere scerium amiss etiam ornare in the miss drana is lorem fermen nunt mauris.",
            rating: 5,
        },
        {
            name: "Devid Cullen",
            role: "Customer",
            image: "https://randomuser.me/api/portraits/men/33.jpg",
            text: "I Was Very Impressed Lorem posuere in miss drana en the nisan semere scerium amiss etiam ornare in the miss drana is lorem fermen nunt mauris.",
            rating: 5,
        },
    ];
    
    return (
        <div className="custom-container w-full h-screen flex items-center justify-center">
            <div className="h-full w-full relative">
                <img
                    className="absolute top-0 right-0 w-1/3 md:w-1/6"
                    src="https://i.ibb.co/BsvpWbS/right-quote.png"
                    alt=""
                />
                <img
                    className="absolute left-0 bottom-0 w-1/3 md:w-1/6"
                    src="https://i.ibb.co/34PPTZM/left-quote.png"
                    alt=""
                />

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4 h-5/6 w-5/6">
                        <div className="w-full h-full flex items-center justify-center">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 40,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 50,
                                    },
                                }}
                                autoplay={true}
                                modules={[Pagination, Autoplay, Navigation]}
                                className="flex items-center justify-center !pb-10"
                            >
                                {testimonials.map((item, idx) => (
                                    <SwiperSlide
                                        key={idx}
                                        className="w-full h-full flex items-center justify-center"
                                    >
                                        <div className="text-center">
                                            <img
                                                src={item.image}
                                                className="mx-auto size-3/5 rounded-full"
                                                alt=""
                                            />
                                            <div className="mt-6 lg:mt12">
                                                <h1 className="text-lg mb-2 text-gray-800">
                                                    {item.name}
                                                </h1>
                                                <p className="text-md text-gray-600">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
