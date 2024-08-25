import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa";
import { IoTime } from "react-icons/io5";



const ChooseUs = () => {
    return (
        <div className="min-h-screen w-full flex flex-col md:flex-row md:gap-4 lg:gap-8">
            <div className="md:w-1/2 flex items-center justify-between">
                <img
                    className="w-full h-full md:h-4/6 object-cover"
                    src="https://i.ibb.co/HNQCVBh/why-choose.png"
                    alt="why choose us"
                />
            </div>
            <div className="p-4 md:w-1/2 z-10 flex items-center justify-center">
                <div>
                    <h1 className="bg-red-100 uppercase w-fit rounded px-10 py-2 text-md font-semibold text-red-500">
                        why choose us
                    </h1>
                    <h1 className="text-4xl lg:w-3/4 font-semibold my-6">
                        We offer the best experience with our rental deals
                    </h1>
                    <div>
                        <div className="flex gap-4 items-center justify-start mb-4">
                            <div className="p-2 bg-red-100 rounded bg-opacity-80">
                                <FaHandHoldingDollar className="size-8 text-red-500 " />
                            </div>
                            <div>
                                <h1 className="text-lg font-semibold">Best price guaranteed</h1>
                                <p className="text-[#6D6D6D] w-5/6 lg:w-3/4 mt-2">
                                    Find a lower price? We’ll refund you 100% of
                                    the difference.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center justify-start mb-4">
                            <div className="p-2 bg-red-100 rounded bg-opacity-80">
                                <FaUserCheck className="size-8 text-red-500 " />
                            </div>
                            <div>
                                <h1 className="text-lg font-semibold">Experience driver</h1>
                                <p className="text-[#6D6D6D] w-5/6 lg:w-3/4 mt-2">
                                Don’t have driver? Don’t worry, we have many
                                experienced driver for you.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center justify-start mb-4">
                            <div className="p-2 bg-red-100 rounded bg-opacity-80">
                                <IoTime className="size-8 text-red-500 " />
                            </div>
                            <div>
                                <h1 className="text-lg font-semibold">24 hour services</h1>
                                <p className="text-[#6D6D6D] w-5/6 lg:w-3/4 mt-2">
                                Book your car anytime and we will make sure your safe ride to your direction.
                                </p>
                            </div>
                        </div>
                        {/* <div className="flex gap-4 items-center justify-start">
                            <div className="p-2 bg-red-100 rounded bg-opacity-80">
                                <FaHandHoldingDollar className="size-8 text-red-500 " />
                            </div>
                            <div>
                                <h1 className="text-lg font-semibold">Best price guaranteed</h1>
                                <p className="text-[#6D6D6D] w-3/4 mt-2">
                                    Find a lower price? We’ll refund you 100% of
                                    the difference.
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;
