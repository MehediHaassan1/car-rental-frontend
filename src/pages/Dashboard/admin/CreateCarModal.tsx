import { FaPlus } from "react-icons/fa6";
import { Button, Modal } from "antd";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { TCar } from "../../../types";
import uploadImageToCloudinary from "../../../utils/uploadImageToCloudinary";
import { useAddCarMutation } from "../../../redux/features/car/carApi";
import Swal from "sweetalert2";
const CreateCarModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [electric, setElectric] = useState("");
    const [engine, setEngine] = useState("");
    const [horsePower, setHorsePower] = useState("");
    const [transmission, setTransmission] = useState("");
    const [drivetrain, setDriveTrain] = useState("");
    const [ac, setAc] = useState("");
    const [doorCount, setDoorCount] = useState("");
    const [carType, setCarType] = useState("");
    const [atxOrMtx, setAtxOrMtx] = useState("");
    const [addCar] = useAddCarMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<TCar>();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const { features, carImage, pricePerHour, seats, luggage, ...rest } =
            data;
        const image = await uploadImageToCloudinary(carImage);
        const price = Number(pricePerHour);
        const seatsCount = Number(seats);
        const seatingCapacity = Number(seats);
        const luggageCount = Number(luggage);
        const door = Number(doorCount);

        const carFeatures = features
            .split(",")
            .map((item: string) => item.trim());

        const carData = {
            ...rest,
            carImage: image,
            pricePerHour: price,
            seats: seatsCount,
            seatingCapacity,
            luggage: luggageCount,
            doorCount: door,
            isElectric: electric === "true" ? true : false,
            engine,
            horsepower: horsePower,
            transmission,
            drivetrain,
            ac: ac === "true" ? true : false,
            carType,
            atxOrMtx,
            features: carFeatures,
        };

        try {
            const res = await addCar(carData);
            if (res?.data?.success) {
                Swal.fire({
                    icon: "success",
                    title: "Car added successfully",
                    showConfirmButton: false,
                    timer: 3000,
                });
                reset();
                setIsModalOpen(false);
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

    return (
        <div>
            <Button type="primary" icon={<FaPlus />} onClick={showModal}>
                Add Car
            </Button>
            <Modal
                open={isModalOpen}
                onOk={handleOk}
                title="Add car to your service"
                onCancel={handleCancel}
                footer={null}
                width="70%"
                style={{
                    height: "80vh",
                    overflowY: "auto",
                    top: 20,
                }}
            >
                <section className="bg-white dark:bg-gray-900">
                    <div className="flex justify-center min-h-fit">
                        <div className="flex  w-full max-w-4xl mx-auto lg:px-12">
                            <div className="w-full">
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="grid grid-cols-1 gap-2 md:grid-cols-4 lg:grid-cols-9"
                                >
                                    {/* name */}
                                    <label className="w-full col-span-4 md:col-span-2 lg:col-span-3">
                                        <div>Car name</div>
                                        <input
                                            type="text"
                                            placeholder="Lucifer"
                                            className="input input-bordered w-full focus:outline-none rounded h-10 mt-2 pl-2 border border-gray-900"
                                            {...register("name", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "Car name is required",
                                                },
                                            })}
                                            style={
                                                errors.name
                                                    ? {
                                                          border: "1px solid red",
                                                      }
                                                    : {}
                                            }
                                        />
                                        <div className="label">
                                            <span className="label-text-alt">
                                                {errors.name && (
                                                    <p
                                                        role="alert"
                                                        className="text-red-600"
                                                    >
                                                        {errors.name.message}
                                                    </p>
                                                )}
                                            </span>
                                        </div>
                                    </label>

                                    {/* color */}
                                    <label className="w-full col-span-4 md:col-span-2 lg:col-span-3">
                                        <div>Color</div>
                                        <input
                                            type="text"
                                            placeholder="eg: Midnight Blue"
                                            className="input input-bordered w-full focus:outline-none rounded h-10 mt-2 pl-2 border border-gray-900"
                                            {...register("color", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "Car color is required",
                                                },
                                            })}
                                            style={
                                                errors.color
                                                    ? {
                                                          border: "1px solid red",
                                                      }
                                                    : {}
                                            }
                                        />
                                        <div className="label">
                                            <span className="label-text-alt">
                                                {errors.color && (
                                                    <p
                                                        role="alert"
                                                        className="text-red-600"
                                                    >
                                                        {errors.color.message}
                                                    </p>
                                                )}
                                            </span>
                                        </div>
                                    </label>

                                    {/* electric */}
                                    <label className="w-full col-span-4 md:col-span-2 lg:col-span-3">
                                        <div>Electric</div>
                                        <select
                                            value={electric}
                                            id="car-type"
                                            className="bg-white border text-gray-900 text-sm rounded block w-full h-10 mt-2  pl-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg border-gray-700"
                                            onChange={(e) =>
                                                setElectric(e.target.value)
                                            }
                                        >
                                            <option value="">Select One</option>
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </select>
                                    </label>

                                    {/* price per hour */}
                                    <label className="w-full col-span-4 md:col-span-2 lg:col-span-3">
                                        <div>Price per hour</div>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full focus:outline-none rounded h-10 mt-2 pl-2 border border-gray-900"
                                            {...register("pricePerHour", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "Price is required",
                                                },
                                                pattern: {
                                                    value: /^[0-9]+$/,
                                                    message:
                                                        "Only number required",
                                                },
                                            })}
                                            style={
                                                errors.color
                                                    ? {
                                                          border: "1px solid red",
                                                      }
                                                    : {}
                                            }
                                        />
                                        <div className="label">
                                            <span className="label-text-alt">
                                                {errors.pricePerHour && (
                                                    <p
                                                        role="alert"
                                                        className="text-red-600"
                                                    >
                                                        {
                                                            errors.pricePerHour
                                                                .message
                                                        }
                                                    </p>
                                                )}
                                            </span>
                                        </div>
                                    </label>

                                    {/* engine */}
                                    <label className="w-full col-span-4 md:col-span-2 lg:col-span-3">
                                        <div>Engine</div>
                                        <select
                                            value={engine}
                                            id="car-type"
                                            className="bg-white border text-gray-900 text-sm rounded block w-full h-10 mt-2  pl-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg border-gray-700"
                                            onChange={(e) =>
                                                setEngine(e.target.value)
                                            }
                                        >
                                            <option value="">Select One</option>
                                            <option value="Electric">
                                                Electric
                                            </option>
                                            <option value="Inline-4">
                                                Inline-4
                                            </option>
                                            <option value="V10">V10</option>
                                            <option value="V8">V8</option>
                                            <option value="V6">V6</option>
                                        </select>
                                    </label>

                                    {/* horse power */}
                                    <label className="w-full col-span-4 md:col-span-2 lg:col-span-3">
                                        <div>Horse Power</div>
                                        <select
                                            value={horsePower}
                                            id="car-type"
                                            className="bg-white border text-gray-900 text-sm rounded block w-full h-10 mt-2 border-gray-700 pl-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg"
                                            onChange={(e) =>
                                                setHorsePower(e.target.value)
                                            }
                                        >
                                            <option value="">Select One</option>
                                            <option value="120 hp">
                                                120 hp
                                            </option>
                                            <option value="150 hp">
                                                150 hp
                                            </option>
                                            <option value="200 hp">
                                                200 hp
                                            </option>
                                            <option value="280 hp">
                                                280 hp
                                            </option>
                                            <option value="400 hp">
                                                400 hp
                                            </option>
                                            <option value="480 hp">
                                                480 hp
                                            </option>
                                            <option value="550 hp">
                                                550 hp
                                            </option>
                                            <option value="630 hp">
                                                630 hp
                                            </option>
                                            <option value="750 hp">
                                                750 hp
                                            </option>
                                        </select>
                                    </label>

                                    {/* torque */}
                                    <label className="w-full col-span-4 md:col-span-2 lg:col-span-3">
                                        <div>Torque</div>
                                        <input
                                            type="text"
                                            placeholder="eg: 500 nm"
                                            className="w-full focus:outline-none rounded h-10 mt-2 pl-2 border border-gray-900"
                                            {...register("torque", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "Torque is required",
                                                },
                                            })}
                                            style={
                                                errors.torque
                                                    ? {
                                                          border: "1px solid red",
                                                      }
                                                    : {}
                                            }
                                        />
                                        <div className="label">
                                            <span className="label-text-alt">
                                                {errors.torque && (
                                                    <p
                                                        role="alert"
                                                        className="text-red-600"
                                                    >
                                                        {errors.torque.message}
                                                    </p>
                                                )}
                                            </span>
                                        </div>
                                    </label>

                                    {/* transmission */}
                                    <label className="w-full col-span-4 md:col-span-2 lg:col-span-3">
                                        <div>Transmission</div>
                                        <select
                                            value={transmission}
                                            id="car-type"
                                            className="bg-white border text-gray-900 text-sm rounded block w-full h-10 mt-2 border-gray-700 pl-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg"
                                            onChange={(e) =>
                                                setTransmission(e.target.value)
                                            }
                                        >
                                            <option value="">Select One</option>
                                            <option value="Automatic">
                                                Automatic
                                            </option>
                                            <option value="Manual">
                                                Manual
                                            </option>
                                        </select>
                                    </label>

                                    {/* drivetrain */}
                                    <label className="w-full col-span-4 md:col-span-2 lg:col-span-3">
                                        <div>Drive train</div>
                                        <select
                                            value={drivetrain}
                                            id="car-type"
                                            className="bg-white border text-gray-900 text-sm rounded block w-full h-10 mt-2 border-gray-700 pl-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg"
                                            onChange={(e) =>
                                                setDriveTrain(e.target.value)
                                            }
                                        >
                                            <option value="">Select One</option>
                                            <option value="Rear-Wheel Drive">
                                                Rear-Wheel Drive
                                            </option>
                                            <option value="Four-Wheel Drive">
                                                Four-Wheel Drive
                                            </option>
                                        </select>
                                    </label>

                                    {/* range */}
                                    <label className="w-full col-span-4 md:col-span-2 lg:col-span-3">
                                        <div>Range</div>
                                        <input
                                            type="text"
                                            placeholder="eg: 400 miles"
                                            className="input input-bordered w-full focus:outline-none rounded h-10 mt-2 pl-2 border border-gray-900"
                                            {...register("range", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "Range is required",
                                                },
                                            })}
                                            style={
                                                errors.range
                                                    ? {
                                                          border: "1px solid red",
                                                      }
                                                    : {}
                                            }
                                        />
                                        <div className="label">
                                            <span className="label-text-alt">
                                                {errors.range && (
                                                    <p
                                                        role="alert"
                                                        className="text-red-600"
                                                    >
                                                        {errors.range.message}
                                                    </p>
                                                )}
                                            </span>
                                        </div>
                                    </label>

                                    {/* topSpeed */}
                                    <label className="w-full col-span-4 md:col-span-2 lg:col-span-3">
                                        <div>Top speed</div>
                                        <input
                                            type="text"
                                            placeholder="eg: 120 mph"
                                            className="input input-bordered w-full focus:outline-none rounded h-10 mt-2 pl-2 border border-gray-900"
                                            {...register("topSpeed", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "Top Speed is required",
                                                },
                                            })}
                                            style={
                                                errors.topSpeed
                                                    ? {
                                                          border: "1px solid red",
                                                      }
                                                    : {}
                                            }
                                        />
                                        <div className="label">
                                            <span className="label-text-alt">
                                                {errors.topSpeed && (
                                                    <p
                                                        role="alert"
                                                        className="text-red-600"
                                                    >
                                                        {
                                                            errors.topSpeed
                                                                .message
                                                        }
                                                    </p>
                                                )}
                                            </span>
                                        </div>
                                    </label>

                                    {/* acceleration */}
                                    <label className="w-full col-span-4 md:col-span-2 lg:col-span-3">
                                        <div>Acceleration</div>
                                        <input
                                            type="text"
                                            placeholder="eg: 0-60 mph in 7.5 seconds"
                                            className="input input-bordered w-full focus:outline-none rounded h-10 mt-2 pl-2 border border-gray-900"
                                            {...register("acceleration", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "Acceleration is required",
                                                },
                                            })}
                                            style={
                                                errors.acceleration
                                                    ? {
                                                          border: "1px solid red",
                                                      }
                                                    : {}
                                            }
                                        />
                                        <div className="label">
                                            <span className="label-text-alt">
                                                {errors.acceleration && (
                                                    <p
                                                        role="alert"
                                                        className="text-red-600"
                                                    >
                                                        {
                                                            errors.acceleration
                                                                .message
                                                        }
                                                    </p>
                                                )}
                                            </span>
                                        </div>
                                    </label>

                                    {/* seats */}
                                    <label className="w-full col-span-4 md:col-span-2 lg:col-span-3">
                                        <div>Seats</div>
                                        <input
                                            placeholder="eg: 4"
                                            type="text"
                                            className="input input-bordered w-full focus:outline-none rounded h-10 mt-2 pl-2 border border-gray-900"
                                            {...register("seats", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "seats is required",
                                                },
                                                pattern: {
                                                    value: /^[0-9]+$/,
                                                    message:
                                                        "Only number required",
                                                },
                                                min: {
                                                    value: 4,
                                                    message:
                                                        "Minimum value is 4",
                                                },
                                                max: {
                                                    value: 10,
                                                    message:
                                                        "Maximum value is 10",
                                                },
                                            })}
                                            style={
                                                errors.seats
                                                    ? {
                                                          border: "1px solid red",
                                                      }
                                                    : {}
                                            }
                                        />
                                        <div className="label">
                                            <span className="label-text-alt">
                                                {errors.seats && (
                                                    <p
                                                        role="alert"
                                                        className="text-red-600"
                                                    >
                                                        {errors.seats.message}
                                                    </p>
                                                )}
                                            </span>
                                        </div>
                                    </label>

                                    {/* cargoCapacity */}
                                    <label className="w-full col-span-4 md:col-span-2 lg:col-span-3">
                                        <div>Cargo capacity</div>
                                        <input
                                            placeholder="eg: 12 cubic feet"
                                            type="text"
                                            className="input input-bordered w-full focus:outline-none rounded h-10 mt-2 pl-2 border border-gray-900"
                                            {...register("cargoCapacity", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "Cargo capacity is required",
                                                },
                                            })}
                                            style={
                                                errors.cargoCapacity
                                                    ? {
                                                          border: "1px solid red",
                                                      }
                                                    : {}
                                            }
                                        />
                                        <div className="label">
                                            <span className="label-text-alt">
                                                {errors.cargoCapacity && (
                                                    <p
                                                        role="alert"
                                                        className="text-red-600"
                                                    >
                                                        {
                                                            errors.cargoCapacity
                                                                .message
                                                        }
                                                    </p>
                                                )}
                                            </span>
                                        </div>
                                    </label>

                                    {/* fuelEconomy */}
                                    <label className="w-full col-span-4 md:col-span-2 lg:col-span-3">
                                        <div>Fuel Economy</div>
                                        <input
                                            placeholder="eg: 100 MPGe"
                                            type="text"
                                            className="input input-bordered w-full focus:outline-none rounded h-10 mt-2 pl-2 border border-gray-900"
                                            {...register("fuelEconomy", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "fuelEconomy is required",
                                                },
                                            })}
                                            style={
                                                errors.fuelEconomy
                                                    ? {
                                                          border: "1px solid red",
                                                      }
                                                    : {}
                                            }
                                        />
                                        <div className="label">
                                            <span className="label-text-alt">
                                                {errors.fuelEconomy && (
                                                    <p
                                                        role="alert"
                                                        className="text-red-600"
                                                    >
                                                        {
                                                            errors.fuelEconomy
                                                                .message
                                                        }
                                                    </p>
                                                )}
                                            </span>
                                        </div>
                                    </label>

                                    {/* ac */}
                                    <label className="w-full col-span-4 md:col-span-2 lg:col-span-3">
                                        <div>AC</div>
                                        <select
                                            value={ac}
                                            id="car-type"
                                            className="bg-white border text-gray-900 text-sm rounded block w-full h-10 mt-2 border-gray-700 pl-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg"
                                            onChange={(e) =>
                                                setAc(e.target.value)
                                            }
                                        >
                                            <option value="">Select One</option>
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </select>
                                    </label>

                                    {/* luggage */}
                                    <label className="w-full col-span-4 md:col-span-2 lg:col-span-3">
                                        <div>Luggage</div>
                                        <input
                                            placeholder="eg: 1"
                                            type="text"
                                            className="input input-bordered w-full focus:outline-none rounded h-10 mt-2 pl-2 border border-gray-900"
                                            {...register("luggage", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "luggage is required",
                                                },
                                                pattern: {
                                                    value: /^[0-9]+$/,
                                                    message:
                                                        "Only number required",
                                                },
                                                min: {
                                                    value: 1,
                                                    message:
                                                        "Minimum value is 4",
                                                },
                                                max: {
                                                    value: 4,
                                                    message:
                                                        "Maximum value is 4",
                                                },
                                            })}
                                            style={
                                                errors.luggage
                                                    ? {
                                                          border: "1px solid red",
                                                      }
                                                    : {}
                                            }
                                        />
                                        <div className="label">
                                            <span className="label-text-alt">
                                                {errors.luggage && (
                                                    <p
                                                        role="alert"
                                                        className="text-red-600"
                                                    >
                                                        {errors.luggage.message}
                                                    </p>
                                                )}
                                            </span>
                                        </div>
                                    </label>

                                    {/* atxOrMtx */}
                                    <label className="w-full col-span-4 md:col-span-2 lg:col-span-3">
                                        <div>Atx/Mtx</div>
                                        <select
                                            value={atxOrMtx}
                                            id="car-type"
                                            className="bg-white border text-gray-900 text-sm rounded block w-full h-10 mt-2 border-gray-700 pl-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg"
                                            onChange={(e) =>
                                                setAtxOrMtx(e.target.value)
                                            }
                                        >
                                            <option value="">Select One</option>
                                            <option value="ATX">ATX</option>
                                            <option value="MTX">MTX</option>
                                        </select>
                                    </label>

                                    {/* doorCount */}
                                    <label className="w-full col-span-3 md:col-span-2 lg:col-span-3">
                                        <div>Door count</div>
                                        <select
                                            value={doorCount}
                                            id="car-type"
                                            className="bg-white border text-gray-900 text-sm rounded block w-full h-10 mt-2 border-gray-700 pl-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg"
                                            onChange={(e) =>
                                                setDoorCount(e.target.value)
                                            }
                                        >
                                            <option value="">Select One</option>
                                            <option value="2">2</option>
                                            <option value="4">4</option>
                                            <option value="6">6</option>
                                        </select>
                                    </label>

                                    {/* carType */}
                                    <label className="w-full col-span-4 md:col-span-2 lg:col-span-3">
                                        <div>Car Type</div>
                                        <select
                                            value={carType}
                                            id="car-type"
                                            className="bg-white border text-gray-900 text-sm rounded block w-full h-10 mt-2 border-gray-700 pl-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg"
                                            onChange={(e) =>
                                                setCarType(e.target.value)
                                            }
                                        >
                                            <option value="">Car type</option>
                                            <option value="Sedan">Sedan</option>
                                            <option value="SUV">SUV</option>
                                            <option value="Hatchback">
                                                Hatchback
                                            </option>
                                            <option value="Truck">Truck</option>
                                            <option value="Convertible">
                                                Convertible
                                            </option>
                                        </select>
                                    </label>

                                    {/* car features */}
                                    <label className="w-full col-span-4 md:col-span-2 lg:col-span-3">
                                        <div>
                                            Features{" "}
                                            <span className="text-gray-500">
                                                (comma separated)
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="eg: one, two, three"
                                            className="w-full focus:outline-none rounded h-10 mt-2 pl-2 border border-gray-900"
                                            {...register("features", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "Features is required",
                                                },
                                            })}
                                            style={
                                                errors.features
                                                    ? {
                                                          border: "1px solid red",
                                                      }
                                                    : {}
                                            }
                                        />
                                        <div className="label">
                                            <span className="label-text-alt">
                                                {errors.features && (
                                                    <p
                                                        role="alert"
                                                        className="text-red-600"
                                                    >
                                                        {
                                                            errors.features
                                                                .message
                                                        }
                                                    </p>
                                                )}
                                            </span>
                                        </div>
                                    </label>

                                    {/* car image */}
                                    <label className="w-full col-span-4 md:col-span-2 lg:col-span-full">
                                        <div>Image</div>
                                        <input
                                            type="file"
                                            className="w-full focus:outline-none rounded h-10 mt-2 pl-2 border border-gray-900 pt-1"
                                            {...register("carImage", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "Car image is required",
                                                },
                                            })}
                                            style={
                                                errors.carImage
                                                    ? {
                                                          border: "1px solid red",
                                                      }
                                                    : {}
                                            }
                                        />
                                        <div className="label">
                                            <span className="label-text-alt">
                                                {errors.carImage && (
                                                    <p
                                                        role="alert"
                                                        className="text-red-600"
                                                    >
                                                        {
                                                            errors.carImage
                                                                .message
                                                        }
                                                    </p>
                                                )}
                                            </span>
                                        </div>
                                    </label>

                                    {/* description */}
                                    <label className="w-full col-span-full">
                                        <div>Description</div>
                                        <textarea
                                            className="w-full focus:outline-none rounded h-24 mt-2 pl-2 border border-gray-900 pt-1"
                                            {...register("description", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "Car image description is required",
                                                },
                                                minLength: {
                                                    value: 200,
                                                    message:
                                                        "Minimun 200 characters",
                                                },
                                            })}
                                            style={
                                                errors.description
                                                    ? {
                                                          border: "1px solid red",
                                                      }
                                                    : {}
                                            }
                                        />
                                        <div className="label">
                                            <span className="label-text-alt">
                                                {errors.description && (
                                                    <p
                                                        role="alert"
                                                        className="text-red-600"
                                                    >
                                                        {
                                                            errors.description
                                                                .message
                                                        }
                                                    </p>
                                                )}
                                            </span>
                                        </div>
                                    </label>

                                    {/* submit button */}
                                    <div className="mt-5 col-span-4 lg:col-span-full ">
                                        <input
                                            type="submit"
                                            value="Add Car"
                                            className="file-input file-input-bordered w-full font-bold rounded px-4 py-2 cursor-pointer disabled:cursor-not-allowed bg-red-400 hover:bg-red-600 transition-all duration-300 col-start-2"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Modal>
        </div>
    );
};

export default CreateCarModal;
