import { FaStar, FaUser, FaRegHeart } from "react-icons/fa";
import { BsFillSuitcase2Fill } from "react-icons/bs";
import { GiCarDoor } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";
import { useGetAllCarsQuery } from "../../redux/features/car/carApi";
import { Link } from "react-router-dom";
import { TCar } from "../../types";

const FeaturedCar = () => {
    const { data } = useGetAllCarsQuery({ price: 0 });
    const featuredCar: TCar[] = data?.data.slice(0, 6);

    return (
        <div className="custom-container w-full min-h-screen my-10">
            <div className="text-center">
                <div className="w-full">
                    <div className="w-full flex items-center justify-center">
                        <p className="bg-red-100 uppercase w-fit rounded px-10 py-2 text-md font-semibold text-red-500 text-center">
                            POPULAR RENTAL DEALS
                        </p>
                    </div>
                    <h1 className="text-4xl font-semibold my-6">
                        Most popular cars rental deals
                    </h1>
                </div>

                <div className="flex flex-wrap m-3">
                    {featuredCar?.map((item, idx) => {
                        return (
                            <div
                                key={idx}
                                className="w-full sm:w-1/2 md:w-1/3 flex flex-col md:p-2 lg:p-2"
                            >
                                <div className="bg-white rounded-lg shadow-xl overflow-hidden flex-1 flex flex-col mb-4 md:mb-0">
                                    <div className="lg:p-3">
                                        <img
                                            className="object-cover w-full h-48 rounded"
                                            src={item.carImage}
                                            alt=""
                                        />
                                    </div>
                                    <div className="p-4 flex-1 flex flex-col items-start">
                                        <div className="flex items-center justify-between w-full">
                                            <h3 className="mb-4 text-2xl">
                                                {item.name}
                                            </h3>
                                            <FaRegHeart className="text-xl" />
                                        </div>

                                        <div className="lg:flex items-end justify-between w-full">
                                            <div className="w-full lg:w-1/2">
                                                <div className="w-full flex items-center gap-2">
                                                    <FaStar />
                                                    4.8 (245 reviews)
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-1/2 flex items-center justify-start lg:justify-end gap-2 lg:gap-4">
                                                <p className="flex items-center gap-2">
                                                    <FaUser /> {item.seats}
                                                </p>

                                                <p className="flex items-center gap-2">
                                                    <BsFillSuitcase2Fill />{" "}
                                                    {item.luggage}
                                                </p>

                                                <p className="flex items-center gap-2">
                                                    <GiCarDoor />{" "}
                                                    {item.doorCount}
                                                </p>
                                            </div>
                                        </div>

                                        <div className=" flex items-center justify-between w-full mt-4">
                                            <h3 className="text-2xl">
                                                <span className="text-3xl font-semibold">
                                                    ${item.pricePerHour}
                                                </span>
                                                /day
                                            </h3>
                                            <Link
                                                to={`/car/${item._id}`}
                                                className="text-lg block bg-red-500 hover:bg-red-600 focus:bg-red-500 text-white font-semibold rounded
                px-4 py-2 duration-300 hover:cursor-pointer"
                                            >
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-8 flex items-center justify-center">
                    <Link
                        to="/cars"
                        className="bg-red-600 px-8 py-3 rounded text-red-100 hover:bg-red-700 transition duration-300 flex items-center gap-2 group"
                    >
                        Show all vehicles
                        <span>
                            <FaArrowRight className="group-hover:rotate-0 transition-all lg:-rotate-[30deg] text-xl" />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCar;
