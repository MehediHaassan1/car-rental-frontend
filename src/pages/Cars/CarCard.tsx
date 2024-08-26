import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
    return (
        <div className="bg-gray-300 border  rounded  p-3 shadow-lg max-w-xs mx-auto">
            <div className="bg-white rounded-lg mb-4">
                <img
                    src={car.image}
                    alt={car.title}
                    className="w-full h-40 object-cover mb-4"
                />
            </div>
            <div className="bg-white p-4 rounded h-220 md:h-285">
                <div className=" flex items-center justify-between mb-8">
                    <h3 className="text-lg font-bold">{car.title}</h3>

                    <div className="mt-4 md:mt-0">
                        <span className="text-red-500 font-semibold text-xl">
                            {car.price}
                        </span>
                        /Per Hour
                    </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{car.description}</p>
                <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row justify-between">
                    <Link to='/view-details' className="border px-4 py-1 text-black hover:bg-black hover:text-white transition md:mb-0 rounded">
                        View Details
                    </Link>
                    <Link to='/book-now' className="rounded bg-red-500 text-white px-4 py-1 hover:bg-red-600 transition">
                        Book Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
