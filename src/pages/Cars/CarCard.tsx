import { Link, useLocation } from "react-router-dom";
import { TCar } from "../../types";
import CarBookModal from "./CarBookModal";

const CarCard = ({ car }: { car: TCar }) => {
    const { pathname } = useLocation();
    return (
        <div className="bg-gray-300 border  rounded  p-3 shadow-lg max-w-xs mx-auto">
            <div className="bg-white rounded-lg mb-4">
                <img
                    src={car.carImage}
                    alt={car.name}
                    className="w-full h-40 object-cover mb-4"
                />
            </div>
            <div className="bg-white p-4 rounded h-220 md:h-285">
                <div className=" flex items-center justify-between mb-8">
                    <h3 className="text-lg font-bold">{car.name}</h3>

                    <div className="mt-4 md:mt-0 font-bold">
                        <span className="text-red-500 text-xl">
                            ${car.pricePerDay}
                        </span>
                        /Day
                    </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                    {car.description.slice(0, 100)}
                </p>

                {pathname === "/booking" ? (
                    <CarBookModal car={car} />
                ) : (
                    <Link
                        to={`/car/${car._id}`}
                        className="rounded bg-red-500 text-white px-4 py-2 hover:bg-red-600 transition"
                    >
                        View Details
                    </Link>
                )}
            </div>
        </div>
    );
};

export default CarCard;
