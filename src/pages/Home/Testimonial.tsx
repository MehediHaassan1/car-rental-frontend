import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

const Testimonial = () => {
    const testimonials = [
        {
            name: "Kevin Martin",
            role: "Customer",
            image: "https://i.ibb.co/bJdcGkV/model-20.png",
            text: "I was very impressed with the service. The whole process was seamless and efficient. The car was in excellent condition and met all my expectations.",
            rating: 5,
        },
        {
            name: "David Cullen",
            role: "Customer",
            image: "https://i.ibb.co/X7msj6h/model-21.png",
            text: "Great experience! The staff was very friendly, and the vehicle was clean and well-maintained. I will definitely rent from them again.",
            rating: 5,
        },
        {
            name: "Peter Hayes",
            role: "Customer",
            image: "https://i.ibb.co/W3vhbcj/model-22.png",
            text: "The service exceeded my expectations. The rental process was quick and easy, and the car performed beautifully throughout my trip.",
            rating: 5,
        },
        {
            name: "Linda Adams",
            role: "Customer",
            image: "https://i.ibb.co/xJ4kPxy/model-23.png",
            text: "I had a fantastic experience with this company. The car was in top-notch condition, and the customer service was exceptional.",
            rating: 5,
        },
        {
            name: "John Doe",
            role: "Customer",
            image: "https://i.ibb.co/SxTpYxk/model24.png",
            text: "Everything went smoothly, from booking to returning the car. The team was very professional, and I highly recommend their service.",
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
