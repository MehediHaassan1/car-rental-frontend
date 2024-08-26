import { ImLocation2 } from "react-icons/im";
import { FaCar } from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";

const BookingProcess = () => {
    return (
        <>
            <div className="custom-container h-max my-20">
                <div className="w-full h-full flex flex-col justify-center">
                    <div className="w-full text-center mb-10">
                        <div className="w-full flex items-center justify-center">
                            <p className="bg-red-100 uppercase w-fit rounded px-10 py-2 text-md font-semibold text-red-500 text-center">
                                HOW IT WORK
                            </p>
                        </div>
                        <h1 className="text-4xl font-semibold my-6">
                            Rent with following 3 working steps
                        </h1>
                    </div>

                    <div className="w-4/5 h-3/5 mx-auto flex items-center justify-center">
                        <div className="w-4/5 md:w-full lg:w-4/5 flex flex-col gap-5 md:gap-0 md:flex-row  items-center justify-between">
                            <div className="flex flex-col items-center">
                                <div className="size-20 rounded bg-red-100 flex items-center justify-center">
                                    <ImLocation2 className="text-5xl" />
                                </div>
                                <h1 className="text-xl my-3 font-semibold">
                                    Choose location
                                </h1>
                                <p className="text-md w-2/3 text-center leading-5">
                                    Choose your and find your best car
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="size-20 rounded bg-red-100 flex items-center justify-center">
                                    <IoCalendar className="text-5xl" />
                                </div>
                                <h1 className="text-xl my-3 font-semibold">
                                    Pick-up date
                                </h1>
                                <p className="text-md w-2/3 text-center leading-5">
                                    Select your pick up date and time to book
                                    your car
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="size-20 rounded bg-red-100 flex items-center justify-center">
                                    <FaCar className="text-5xl" />
                                </div>
                                <h1 className="text-xl my-3 font-semibold">
                                    Book your car
                                </h1>
                                <p className="text-md w-2/3 text-center leading-5">
                                    Book your car and we will deliver it
                                    directly to you
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default BookingProcess;
