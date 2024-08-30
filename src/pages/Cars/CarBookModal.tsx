import { useState } from "react";
import { Button, Modal } from "antd";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "../../redux/hook";
import { TCar } from "../../types";
import { useNavigate } from "react-router-dom";
import { useCreateBookingMutation } from "../../redux/features/booking/bookingApi";
import Swal from "sweetalert2";

const CarBookModal = ({ car }: { car: TCar }) => {
    const [card, setCard] = useState(true);
    const [createBook, { isLoading }] = useCreateBookingMutation();
    const { user, token } = useAppSelector((state) => state.auth);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const bookingData = {
            identity: data?.identity,
            identityNo: data?.identityNo,
            drivingLicenseNo: data?.drivingLicenseNo,
            user: user?._id,
            car: car?._id,
        };

        try {
            const res = await createBook(bookingData);
            if (res.data.success) {
                Swal.fire({
                    icon: "success",
                    title: "Booking successful",
                    showConfirmButton: false,
                    timer: 1500,
                });
                setOpen(false);
            }
        } catch (error) {
            if (error) {
                Swal.fire({
                    icon: "error",
                    title: "Something went wrong",
                    showConfirmButton: false,
                    timer: 3000,
                });
            }
        }
    };

    const showModal = () => {
        if (user && token) {
            setOpen(true);
        } else {
            navigate("/login");
        }
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <>
            <button
                onClick={showModal}
                className="w-fit text-lg block bg-red-500 hover:bg-red-600 focus:bg-red-500 text-white font-semibold rounded
                px-4 py-2 duration-300 hover:cursor-pointer"
            >
                Book now
            </button>
            <Modal
                open={open}
                title="Book Your Car Now"
                onCancel={handleCancel}
                footer={null}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col mb-3">
                        <label>NID/PASSPORT</label>
                        <select
                            className="mt-1 bg-white border text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg"
                            {...register("identity", { required: true })}
                        >
                            <option value="nid">NID</option>
                            <option value="passport">Passport</option>
                        </select>
                    </div>
                    <div className="flex flex-col mb-3">
                        <label>NID/PASSPORT No.</label>
                        <input
                            className="mt-1 bg-white border text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg"
                            {...register("identityNo", { required: true })}
                        />
                    </div>
                    <div className="flex flex-col mb-3">
                        <label>Driving License No.</label>
                        <input
                            className="mt-1 bg-white border text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg"
                            {...register("drivingLicenseNo", {
                                required: true,
                            })}
                        />
                    </div>

                    <section className="antialiased bg-gray-100 text-gray-600">
                        <div className="h-full">
                            {/* Pay component */}
                            <div>
                                {/* Card body */}
                                <div className="relative max-w-lg mx-auto">
                                    <div className="bg-white rounded-b shadow-lg">
                                        {/* Toggle */}
                                        <div className="flex justify-center mb-6">
                                            <div className="relative flex w-full p-1 bg-gray-50 rounded">
                                                <span
                                                    className="absolute inset-0 m-1 pointer-events-none"
                                                    aria-hidden="true"
                                                >
                                                    <span
                                                        className={`absolute inset-0 w-1/2 bg-white rounded border border-gray-200 shadow-sm transform transition duration-150 ease-in-out ${
                                                            card
                                                                ? "translate-x-0"
                                                                : "translate-x-full"
                                                        }`}
                                                    ></span>
                                                </span>
                                                <p
                                                    className="relative flex-1 text-sm font-medium p-2 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 items-center justify-center flex hover:cursor-pointer"
                                                    onClick={() =>
                                                        setCard(true)
                                                    }
                                                >
                                                    Pay With Card
                                                </p>
                                                <p
                                                    className="relative flex-1 text-sm font-medium p-2 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 items-center justify-center flex hover:cursor-pointer"
                                                    onClick={() =>
                                                        setCard(false)
                                                    }
                                                >
                                                    Pay With Mobile Banking
                                                </p>
                                            </div>
                                        </div>

                                        {/* Card form */}
                                        {card && (
                                            <div className="space-y-4">
                                                <div>
                                                    <label
                                                        className="block text-sm font-medium mb-1"
                                                        htmlFor="card-nr"
                                                    >
                                                        Card Number{" "}
                                                        <span className="text-red-500">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        id="card-nr"
                                                        className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                                                        type="text"
                                                        {...register(
                                                            "cardNumber",
                                                            { required: true }
                                                        )}
                                                        placeholder="1234 1234 1234 1234"
                                                    />
                                                </div>
                                                <div className="flex space-x-4">
                                                    <div className="flex-1">
                                                        <label
                                                            className="block text-sm font-medium mb-1"
                                                            htmlFor="card-expiry"
                                                        >
                                                            Expiry Date{" "}
                                                            <span className="text-red-500">
                                                                *
                                                            </span>
                                                        </label>
                                                        <input
                                                            id="card-expiry"
                                                            className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                                                            type="text"
                                                            placeholder="MM/YY"
                                                            {...register(
                                                                "expiryDate",
                                                                {
                                                                    required:
                                                                        true,
                                                                }
                                                            )}
                                                        />
                                                    </div>
                                                    <div className="flex-1">
                                                        <label
                                                            className="block text-sm font-medium mb-1"
                                                            htmlFor="card-cvc"
                                                        >
                                                            CVC{" "}
                                                            <span className="text-red-500">
                                                                *
                                                            </span>
                                                        </label>
                                                        <input
                                                            id="card-cvc"
                                                            className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                                                            type="text"
                                                            placeholder="CVC"
                                                            {...register(
                                                                "cvc",
                                                                {
                                                                    required:
                                                                        true,
                                                                }
                                                            )}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label
                                                        className="block text-sm font-medium mb-1"
                                                        htmlFor="card-name"
                                                    >
                                                        Name on Card{" "}
                                                        <span className="text-red-500">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        id="card-name"
                                                        className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                                                        type="text"
                                                        placeholder="John Doe"
                                                        {...register(
                                                            "cardName",
                                                            { required: true }
                                                        )}
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        className="block text-sm font-medium mb-1"
                                                        htmlFor="card-email"
                                                    >
                                                        Email{" "}
                                                        <span className="text-red-500">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        id="card-email"
                                                        className="text-sm text-gray-800 bg-white mb-4 border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                                                        type="email"
                                                        {...register("email", {
                                                            required: true,
                                                        })}
                                                        placeholder="john@company.com"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {!card && (
                                            <div>
                                                <div className="flex flex-col mb-4">
                                                    <label>
                                                        Mobile Banking
                                                        Number(Bkash/Nogod/Rocket)
                                                    </label>
                                                    <input
                                                        className="mt-1 bg-white border text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg"
                                                        {...register(
                                                            "mobileBanking",
                                                            { required: true }
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="space-x-4">
                        <Button key="back" onClick={handleCancel}>
                            Cancel
                        </Button>
                        <Button
                            key="submit"
                            type="primary"
                            loading={isLoading}
                            // onClick={handleOk}
                            htmlType="submit"
                            style={{ backgroundColor: "red" }}
                        >
                            Book
                        </Button>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default CarBookModal;
