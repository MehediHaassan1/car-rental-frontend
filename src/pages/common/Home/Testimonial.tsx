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
    ];
    return (
        <div className="bg-white py-8">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">
                    What Our <span className="text-red-600">Customers Say</span>
                </h2>
                <div className="grid grid-cols-1 px-4  md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className=" p-4 rounded-xl shadow-md flex flex-col items-center text-center"
                        >
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-20 h-20 rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">
                                {testimonial.name}
                            </h3>
                            <p className="text-gray-500 mb-2">
                                {testimonial.role}
                            </p>
                            <p className="text-gray-600 mb-4">
                                {testimonial.text}
                            </p>
                            <div className="flex">
                                {Array(testimonial.rating)
                                    .fill(2)
                                    .map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-5 h-5 text-orange-500"
                                        >
                                            <path d="M12 17.27l5.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z" />
                                        </svg>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
