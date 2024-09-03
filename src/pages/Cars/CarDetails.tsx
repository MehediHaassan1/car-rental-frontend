import { FaStar, FaUser } from "react-icons/fa";
import { BsFillLuggageFill, BsSpeedometer } from "react-icons/bs";
import { SiGoogleearthengine } from "react-icons/si";
import { TbAirConditioning } from "react-icons/tb";
import { GiCarDoor, GiElectric } from "react-icons/gi";
import { Link, useParams } from "react-router-dom";
import {
    useGetAllCarsQuery,
    useGetSingleCarQuery,
} from "../../redux/features/car/carApi";
import CarCard from "./CarCard";
import { TCar } from "../../types";

const CarDetails = () => {
    const { id } = useParams();
    const { data } = useGetAllCarsQuery({ price: 0 });
    const filteredCar: TCar[] = data?.data.filter(
        (car: TCar) => car._id !== id
    );

    const shuffledCars = filteredCar?.sort(() => 0.5 - Math.random());
    const relatedCars = shuffledCars?.slice(0, 3);

    const { data: car } = useGetSingleCarQuery(id);

    return (
        <div>
            <div className="custom-container h-4/5">
                <div className="flex flex-col md:flex-row justify-between gap-5">
                    <div className="w-full md:w-2/3 lg:w-1/2 h-4/5">
                        <div className="h-4/5 w-full">
                            <img
                                src={car?.data?.carImage}
                                alt={car?.data?.name}
                                className="w-full h-4/5"
                            />
                        </div>
                        <div className="flex items-center justify-around mt-4">
                            <div className="flex items-center gap-[2px] lg:gap-3 text-lg font-semibold">
                                <FaUser />5
                            </div>
                            <div className="flex items-center gap-[2px] lg:gap-3 text-lg font-semibold">
                                <BsFillLuggageFill />5
                            </div>
                            <div className="flex items-center gap-[2px] lg:gap-3 text-lg font-semibold">
                                <SiGoogleearthengine /> ATX
                            </div>
                            <div className="flex items-center gap-[2px] lg:gap-3 text-lg font-semibold">
                                <TbAirConditioning /> AC
                            </div>
                            <div className="flex items-center gap-[2px] lg:gap-3 text-lg font-semibold">
                                <GiCarDoor /> 4
                            </div>
                            <div className="flex items-center gap-[2px] lg:gap-3 text-lg font-semibold">
                                <BsSpeedometer /> 200
                            </div>
                            <div className="flex items-center gap-[2px] lg:gap-3 text-lg font-semibold">
                                <GiElectric /> Electric
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-1/2 h-full my-auto lg:pl-20">
                        <h1 className="text-3xl font-semibold">
                            {car?.data?.name}
                        </h1>
                        <p className="text-lg font-bold  flex items-end my-3">
                            <span className="text-red-500 text-3xl">
                                ${car?.data?.pricePerHour}
                            </span>
                            /hour
                        </p>
                        <div className="w-full lg:w-1/2 my-3">
                            <div className="w-full flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                4.8 (245 reviews)
                            </div>
                        </div>
                        <div className="mt-3">
                            <p className="text-lg">
                                <span className="font-bold">Brand:</span> Tesla
                            </p>
                        </div>
                        <div className="mb-3">
                            <p className="text-lg">
                                <span className="font-bold">Brand Color:</span>
                                {car?.data?.color}
                            </p>
                        </div>
                        <div className="mb-3">
                            <h1 className="text-lg font-bold">
                                Quick Overview
                            </h1>
                            <ul style={{ listStyle: "disc" }} className="pl-4">
                                {car?.data?.features?.map((item: string) => {
                                    return <li key={item}>{item}</li>;
                                })}
                            </ul>
                        </div>

                        <Link
                            to="/booking"
                            className="w-fit text-lg block bg-red-500 hover:bg-red-600 focus:bg-red-500 text-white font-semibold rounded
                px-4 py-2 duration-300 hover:cursor-pointer"
                        >
                            Book now
                        </Link>

                        {/* <CarBookModal car={car?.data} /> */}
                    </div>
                </div>
            </div>

            <div className="container mx-auto p-4">
                <div className="flex flex-col lg:justify-evenly lg:flex-row gap-6">
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4">
                            Description
                        </h2>
                        <p>{car?.data?.description}</p>
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4">
                            Specifications
                        </h2>
                        <ul className="space-y-2 pl-5">
                            <li>
                                <strong>Engine:</strong> {car?.data?.engine}
                            </li>
                            <li>
                                <strong>Horsepower:</strong>{" "}
                                {car?.data?.horsepower}
                            </li>
                            <li>
                                <strong>Torque:</strong> {car?.data?.torque}
                            </li>
                            <li>
                                <strong>Transmission:</strong>{" "}
                                {car?.data?.transmission}
                            </li>
                            <li>
                                <strong>Drivetrain:</strong>{" "}
                                {car?.data?.drivetrain}
                            </li>
                            <li>
                                <strong>Range:</strong> {car?.data?.range}
                            </li>
                            <li>
                                <strong>Top Speed:</strong>{" "}
                                {car?.data?.topSpeed}
                            </li>
                            <li>
                                <strong>Acceleration:</strong>{" "}
                                {car?.data?.acceleration}
                            </li>
                            <li>
                                <strong>Seating Capacity:</strong>
                                {car?.data?.seatingCapacity}
                            </li>
                            <li>
                                <strong>Cargo Capacity:</strong>{" "}
                                {car?.data?.cargoCapacity}
                            </li>
                            <li>
                                <strong>Fuel Economy:</strong>{" "}
                                {car?.data?.fuelEconomy}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        Customer Reviews
                    </h2>
                    <div className="space-y-4">
                        <div className="p-4 bg-gray-100 rounded-lg">
                            <p className="font-semibold">John Doe</p>
                            <p className="text-yellow-500">★★★★★</p>
                            <p>"Amazing car, loved the driving experience!"</p>
                            <span className="text-sm text-gray-500">
                                August 20, 2024
                            </span>
                        </div>
                        <div className="p-4 bg-gray-100 rounded-lg">
                            <p className="font-semibold">Jane Smith</p>
                            <p className="text-yellow-500">★★★★★</p>
                            <p>"Perfect car for a road trip."</p>
                            <span className="text-sm text-gray-500">
                                August 22, 2024
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        Related Cars
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {relatedCars?.map((car, idx) => {
                            return <CarCard key={idx} car={car} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;
