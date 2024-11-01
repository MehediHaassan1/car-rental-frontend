import { useEffect, useState } from "react";
import { useGetAllCarsQuery } from "../../redux/features/car/carApi";
import CarCard from "./CarCard";
import { Pagination } from "antd"; // Import Antd Pagination component
import { TCar } from "../../types";

const Cars = () => {
    const [carType, setCarType] = useState("");
    const [price, setPrice] = useState<number>(0);
    const [page, setPage] = useState(1); // Add page state
    const [pageSize, setPageSize] = useState(9); // Add pageSize state

    const { data, isLoading } = useGetAllCarsQuery({
        price,
        carType,
        page,
        limit: pageSize,
    });
    const cars: TCar[] = data?.data?.cars;
    const totalCars = data?.data?.pagination?.totalCars;

    const handlePriceRange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const parsedValue = parseInt(e.target.value);
        setPrice(parsedValue);
    };

    const handlePageChange = (page: number, pageSize?: number) => {
        setPage(page);
        if (pageSize) setPageSize(pageSize);
    };

    // Reset page to 1 when carType or price changes
    useEffect(() => {
        setPage(1);
    }, [carType, price]);

    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div className="container gap-4 mx-auto flex flex-col md:flex-row justify-around mt-20 px-4 relative">
                    <div className="bg-red-200 h-fit rounded w-full md:w-80 p-4 mb-4 md:mb-0">
                        <div className="p-2 rounded w-full mx-auto">
                            <div className="w-full">
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="minmax-range"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        ${price}
                                    </label>
                                    <label
                                        htmlFor="minmax-range"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        $500
                                    </label>
                                </div>
                                <input
                                    onChange={handlePriceRange}
                                    id="minmax-range"
                                    type="range"
                                    min="0"
                                    max="500"
                                    value={price}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Filter For Car Type
                                </label>
                                <select
                                    onChange={(e) => setCarType(e.target.value)}
                                    id="car-type"
                                    className="bg-white border text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg mb-10"
                                >
                                    <option value="">Car Type</option>
                                    <option value="sedan">Sedan</option>
                                    <option value="suv">SUV</option>
                                    <option value="hatchback">Hatchback</option>
                                    <option value="truck">Truck</option>
                                    <option value="convertible">
                                        Convertible
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-screen">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {cars?.map((car) => (
                                <CarCard key={car._id} car={car} />
                            ))}
                        </div>
                        {/* Ant Design Pagination */}
                        <div className="flex justify-center items-center mt-4">
                            <Pagination
                                current={page}
                                pageSize={pageSize}
                                total={totalCars}
                                onChange={handlePageChange}
                                showSizeChanger
                                onShowSizeChange={(current, size) =>
                                    handlePageChange(current, size)
                                }
                                pageSizeOptions={[6, 9, 15]}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cars;
