import { useState } from "react";

const CompanyHistory = () => {
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Our Journey
                    </h2>
                    {/* <p className="text-lg text-gray-600">
                        From humble beginnings to becoming a leader in car
                        rentals, discover our story and the milestones that
                        shaped us.
                    </p> */}
                </div>

                <div className="relative">
                    {/* <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full max-w-4xl h-px bg-gray-300"></div>
                    </div> */}
                    <div className="relative space-y-12">
                        {historyData.map((item, index) => (
                            <div
                                key={index}
                                className={`transition-transform duration-500 transform ${
                                    hoveredItem === index
                                        ? "scale-105"
                                        : "scale-100"
                                }`}
                                onMouseEnter={() => setHoveredItem(index)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <div className="flex flex-col items-center sm:flex-row sm:items-start">
                                    <div
                                        className="w-12 h-12 bg-red-500 text-white flex items-center justify-center rounded-full shadow-lg mb-4 sm:mb-0"
                                        style={{ transition: "transform 0.3s" }}
                                    >
                                        <span className="text-xl font-bold">
                                            {item.year}
                                        </span>
                                    </div>
                                    <div className="ml-0 sm:ml-6 text-center sm:text-left">
                                        <h3 className="text-xl font-semibold text-gray-900">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-700 mt-2">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                                {index < historyData.length - 1 && (
                                    <div className="relative mt-8">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-full max-w-4xl h-px bg-gray-300"></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const historyData = [
    {
        year: "2000",
        title: "Foundation",
        description:
            "We started with a small fleet of vehicles and a commitment to providing excellent customer service.",
    },
    {
        year: "2005",
        title: "Foundation",
        description:
            "Expanded our fleet and began offering a wider range of vehicles to meet growing customer demands.",
    },
    {
        year: "2010",
        title: "Online Booking",
        description:
            "Launched our online booking system, making it easier than ever for customers to rent vehicles from anywhere.",
    },
    {
        year: "2015",
        title: "Nationwide Coverage",
        description:
            "Extended our services nationwide, offering convenient pick-up and drop-off locations across the country.",
    },
    {
        year: "2020",
        title: "Sustainability",
        description:
            "Introduced eco-friendly vehicles into our fleet and implemented green practices to reduce our carbon footprint.",
    },
];

export default CompanyHistory;
