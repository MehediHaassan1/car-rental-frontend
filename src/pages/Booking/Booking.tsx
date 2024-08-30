/* eslint-disable react-hooks/exhaustive-deps */
import { debounce } from "lodash";
import { useCallback, useState } from "react";
import { TCar } from "../../types";
import CarCard from "../Cars/CarCard";
import { useSearchCarsQuery } from "../../redux/features/car/carApi";

// Define types for state and search parameters
interface SearchParams {
    carType: string;
    seats: string;
    features: string;
}

const Booking = () => {
    // State for select values
    const [carType, setCarType] = useState<string>("");
    const [seats, setSeats] = useState<string>("");
    const [features, setFeatures] = useState<string>("");
    const [searchParams, setSearchParams] = useState<SearchParams>({ carType, seats, features });

    // Fetch data using the search parameters
    const { data } = useSearchCarsQuery(searchParams, {
        skip: !Object.values(searchParams).some(param => param)
    });

    // Debounced function to handle search
    const handleSearchCars = useCallback(
        debounce((params: SearchParams) => {
            setSearchParams(params);
        }, 500), // Debounce delay in milliseconds
        []
    );

    // Handlers for the select fields
    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newType = e.target.value;
        setCarType(newType);
        handleSearchCars({ ...searchParams, carType: newType });
    };

    const handleSeatsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSeats = e.target.value;
        setSeats(newSeats);
        handleSearchCars({ ...searchParams, seats: newSeats });
    };

    const handleFeaturesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newFeatures = e.target.value;
        setFeatures(newFeatures);
        handleSearchCars({ ...searchParams, features: newFeatures });
    };


    return (
        <div className="min-h-screen custom-container mx-auto">
            <div>
                <div className="mt-10">
                    <h1 className="text-xl md:text-2xl lg:text-3xl mb-10 font-semibold text-center">
                        Select Your Car
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row md:justify-center md:space-x-4">
                    <div className="w-full max-w-xs mb-4 md:mb-0">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Car type
                        </label>
                        <select
                            value={carType}
                            id="car-type"
                            className="bg-white border text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg"
                            onChange={handleTypeChange}
                        >
                            <option value="">Car type</option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="Truck">Truck</option>
                            <option value="Convertible">Convertible</option>
                        </select>
                    </div>

                    <div className="w-full max-w-xs mb-4 md:mb-0">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Features
                        </label>
                        <select
                            value={features}
                            id="features"
                            className="bg-white border text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg"
                            onChange={handleFeaturesChange}
                        >
                            <option value="">Features</option>
                            <option value="Leather upholstery">
                                Leather upholstery
                            </option>
                            <option value="Premium sound system">
                                Premium sound system
                            </option>
                            <option value="Climate control">
                                Climate control
                            </option>
                            <option value="Advanced driver assistance">
                                Advanced driver assistance
                            </option>
                            <option value="Off-road driving modes">
                                Off-road driving modes
                            </option>
                            <option value="Retractable roof">
                                Retractable roof
                            </option>
                            <option value="Customizable driving modes">
                                Customizable driving modes
                            </option>
                            <option value="Off-road tires">
                                Off-road tires
                            </option>
                            <option value="High-tech interior">
                                High-tech interior
                            </option>
                        </select>
                    </div>

                    <div className="w-full max-w-xs mb-4 md:mb-0">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Seats
                        </label>
                        <select
                            value={seats}
                            id="seats"
                            className="bg-white border text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg"
                            onChange={handleSeatsChange}
                        >
                            <option value="">Seats</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="8">8</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="min-h-scree w-full mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {data?.data?.map((car: TCar) => (
                    <CarCard key={car._id} car={car} />
                ))}
            </div>
        </div>
    );
};

export default Booking;
