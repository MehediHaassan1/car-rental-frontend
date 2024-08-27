import { FaStar, FaUser } from "react-icons/fa";
import { BsFillLuggageFill, BsSpeedometer } from "react-icons/bs";
import { SiGoogleearthengine } from "react-icons/si";
import { TbAirConditioning } from "react-icons/tb";
import { GiCarDoor, GiElectric } from "react-icons/gi";
import { Link, useParams } from "react-router-dom";
import { useGetAllCarsQuery } from "../../redux/features/car/carApi";
import CarCard from "./CarCard";
import { TCar } from "../../types";

const CarDetails = () => {
    const { id } = useParams();
    const { data } = useGetAllCarsQuery(undefined);
    const filteredCar:TCar[] = data?.data.filter((car:TCar) => car._id !== id);

    const shuffledCars = filteredCar?.sort(() => 0.5 - Math.random());
    const relatedCars = shuffledCars?.slice(0, 3);

    return (
        <div>
            <div className="custom-container h-4/5">
                <div className="flex flex-col md:flex-row justify-between gap-5">
                    <div className="w-full md:w-2/3 lg:w-1/2 h-4/5">
                        <img
                            src="https://images.unsplash.com/photo-1523978591478-c753949ff840?w=900"
                            alt=""
                            className="w-full"
                        />
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
                            Tesla Model S
                        </h1>
                        <p className="text-lg font-bold  flex items-end my-3">
                            <span className="text-red-500 text-3xl">$150</span>
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
                                <span className="font-bold">Brand Color:</span>{" "}
                                Black
                            </p>
                        </div>
                        <div className="mb-3">
                            <h1 className="text-lg font-bold">
                                Quick Overview
                            </h1>
                            <ul style={{ listStyle: "disc" }} className="pl-4">
                                <li>Autopilot</li>
                                <li>Full Self-Driving</li>
                                <li>Autopilot Full Self-Driving Panoramic</li>
                                <li>
                                    Sunroof Premium Audio System Heated Seats
                                </li>
                                <li>Wireless Charging</li>
                            </ul>
                        </div>
                        <Link
                            to="/"
                            className="w-fit text-lg block bg-red-500 hover:bg-red-600 focus:bg-red-500 text-white font-semibold rounded
                px-4 py-2 duration-300 hover:cursor-pointer"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container mx-auto p-4">
                <div className="flex flex-col lg:justify-evenly lg:flex-row gap-6">
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4">
                            Description
                        </h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Recusandae cumque sequi, tempore error eos
                            nulla eius reprehenderit commodi totam est
                            accusantium quam voluptates excepturi maiores
                            quibusdam voluptate vero amet consequatur harum
                            corrupti consectetur expedita repellendus itaque
                            dignissimos? Voluptatem quaerat mollitia minus eos
                            aperiam dolores, quam iusto voluptatum vero officiis
                            magnam consequatur consectetur dolore libero in
                            distinctio! Excepturi cupiditate modi, error,
                            eligendi sint amet itaque animi cum, consectetur
                            esse recusandae. Ea eum quas ducimus perferendis
                            sint beatae incidunt tenetur debitis, suscipit
                            nesciunt blanditiis, fugit deleniti labore enim quis
                            numquam tempore quae expedita rem repudiandae.
                            Ullam, suscipit. Pariatur eos quis cum voluptates!
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4">
                            Specifications
                        </h2>
                        <ul className="space-y-2 pl-5">
                            <li>
                                <strong>Engine:</strong> Electric
                            </li>
                            <li>
                                <strong>Horsepower:</strong> 670 hp
                            </li>
                            <li>
                                <strong>Torque:</strong> 1020 Nm
                            </li>
                            <li>
                                <strong>Transmission:</strong> Automatic
                            </li>
                            <li>
                                <strong>Drivetrain:</strong> All-Wheel Drive
                            </li>
                            <li>
                                <strong>Range:</strong> 396 miles
                            </li>
                            <li>
                                <strong>Top Speed:</strong> 200 mph
                            </li>
                            <li>
                                <strong>Acceleration:</strong> 0-60 mph in 1.99
                                seconds
                            </li>
                            <li>
                                <strong>Seating Capacity:</strong> 5
                            </li>
                            <li>
                                <strong>Cargo Capacity:</strong> 28 cubic feet
                            </li>
                            <li>
                                <strong>Fuel Economy:</strong> 120 MPGe
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
