import moment from "moment";
import { useState } from "react";
import { TCar } from "../../types";
import CarCard from "../Cars/CarCard";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSearchCarsMutation } from "../../redux/features/car/carApi";

const Booking = () => {
    const [searchCars] = useSearchCarsMutation();
    const [location, setLocation] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const pickUpDate = moment(startDate).format("DD/MM/YYYY");
    const pickUpTime = moment(startDate).format("HH:mm");

    const dropOffDate = moment(endDate).format("DD/MM/YYYY");
    const dropOffTime = moment(endDate).format("HH:mm");

    const minTime = moment().toDate();
    const maxTime = moment().endOf("day").toDate();

    const [cars, setCars] = useState([]);
    const handleCarSearch = async () => {
        const data = {
            location,
            pickUpDate,
            pickUpTime,
            dropOffDate,
            dropOffTime,
        };

        try {
            const res = await searchCars(data);
            if (res.data.success) {
                setCars(res.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    console.log(cars);

    return (
        <div className="min-h-screen custom-container mx-auto">
            <div className="container mx-auto my-10">
                <div className="grid grid-cols-1 lg:grid-cols-7 items-end md:grid-cols-6 gap-4">
                    <div className="col-span-1 lg:col-span-2 md:col-span-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Pick-up location
                        </label>
                        <select
                            id="pickup-location"
                            className="bg-white border text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg"
                            onChange={(e) => setLocation(e.target.value)}
                        >
                            <option value="">Select Location</option>
                            <option value="Luxury Garage">Luxury Garage</option>
                            <option value="Eco-Friendly Garage">
                                Eco-Friendly Garage
                            </option>
                            <option value="Industrial Park">
                                Industrial Park
                            </option>
                            <option value="Adventure Hub">Adventure Hub</option>
                            <option value="Beachside Lot">Beachside Lot</option>
                            <option value="City Lot">City Lot</option>
                            <option value="Urban Garage">Urban Garage</option>
                            <option value="Race Track Garage">
                                Race Track Garage
                            </option>
                            <option value="City Center">City Center</option>
                            <option value="Industrial Yard">
                                Industrial Yard
                            </option>
                            <option value="Family Garage">Family Garage</option>
                        </select>
                    </div>

                    <div className="col-span-1 lg:col-span-2 md:col-span-2 w-full flex flex-col">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Pick-up date & time
                        </label>
                        <DatePicker
                            className="custom-datepicker bg-white border text-gray-900 text-sm rounded block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2.5 dark:text-white shadow-lg"
                            selected={startDate}
                            onChange={(date) => setStartDate(date as Date)}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={30}
                            dateFormat="dd/MM/yyyy HH:mm"
                            minDate={new Date()} // Prevent past dates
                            minTime={
                                startDate && moment().isSame(startDate, "day")
                                    ? minTime
                                    : undefined
                            }
                            maxTime={
                                startDate && moment().isSame(startDate, "day")
                                    ? maxTime
                                    : undefined
                            }
                        />
                    </div>

                    <div className="col-span-1 lg:col-span-2 md:col-span-2 w-full flex flex-col">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Drop-off date & time
                        </label>
                        <DatePicker
                            className="bg-white border text-gray-900 text-sm rounded block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2.5 dark:text-white shadow-lg"
                            selected={endDate}
                            onChange={(date) => setEndDate(date as Date)}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={30}
                            dateFormat="dd/MM/yyyy HH:mm"
                            minDate={new Date()} // Prevent past dates
                            minTime={
                                startDate && moment().isSame(startDate, "day")
                                    ? minTime
                                    : undefined
                            }
                            maxTime={
                                startDate && moment().isSame(startDate, "day")
                                    ? maxTime
                                    : undefined
                            }
                        />
                    </div>

                    <div className="col-span-1 lg:col-span-1 md:col-span-6 md:px-10 lg:px-0">
                        <button
                            onClick={handleCarSearch}
                            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold rounded px-4 py-2 shadow-lg"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {cars?.map((car: TCar) => {
                    return <CarCard key={car._id} car={car} />;
                })}
            </div>
        </div>
    );
};

export default Booking;
