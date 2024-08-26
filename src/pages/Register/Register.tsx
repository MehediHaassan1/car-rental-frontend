import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Divider } from "antd";
import { useCreateUserMutation } from "../../redux/features/auth/authApi";

type TRegister = {
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    phoneNumber: number;
};

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TRegister>();

    const [showPassword, setShowPassword] = useState(false);
    const [disable, setDisable] = useState(true);

    const [createUser] = useCreateUserMutation();

    const onSubmit: SubmitHandler<TRegister> = async (data) => {
        const {
            firstName,
            lastName,
            email,
            confirmPassword,
            password,
            phoneNumber,
        } = data;
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const userData = {
            name: firstName + " " + lastName,
            email,
            password,
            phone: phoneNumber,
        };
        try {
            const res = await createUser(userData);
            console.log(res.res);
        } catch (error) {
            console.log(error);
        }

        console.log(userData);
    };

    return (
        <div className="max-w-screen-xl mx-auto">
            <Helmet>
                <title>Register - RideEase</title>
            </Helmet>
            <div className="min-h-screen py-16">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-[url(https://i.ibb.co/XbWdZhn/register.jpg)]">
                            <h1 className="text-white text-3xl mb-3">
                                Welcome
                            </h1>
                            <div>
                                <p className="text-white text-center">
                                    Discover, Drive, and Explore with RideEase!
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 py-16 px-4">
                            <h2 className="text-3xl mb-4">Register</h2>
                            <p className="mb-4">
                                It’s free and only take a minute
                            </p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid md:grid-cols-2 gap-2">
                                    <label className="w-full">
                                        <div className="">First Name</div>
                                        <input
                                            type="text"
                                            placeholder="First name"
                                            className={`w-full focus:outline-none rounded h-10 text-sm border border-gray-900 pl-2 mt-2`}
                                            {...register("firstName", {
                                                required: {
                                                    value: true,
                                                    message: "Required",
                                                },
                                            })}
                                            style={
                                                errors.firstName
                                                    ? {
                                                          border: "1px solid red",
                                                      }
                                                    : {}
                                            }
                                        />
                                        <div className="label">
                                            <span className="label-text-alt">
                                                {errors.firstName && (
                                                    <p
                                                        role="alert"
                                                        className="text-red-600"
                                                    >
                                                        {
                                                            errors.firstName
                                                                .message
                                                        }
                                                    </p>
                                                )}
                                            </span>
                                        </div>
                                    </label>
                                    <label className="w-full">
                                        <div className="">Last Name</div>
                                        <input
                                            type="text"
                                            placeholder="Last name"
                                            className="input input-bordered w-full focus:outline-none rounded h-10 text-sm mt-2 border border-gray-900 pl-2"
                                            {...register("lastName", {
                                                required: {
                                                    value: true,
                                                    message: "Required",
                                                },
                                            })}
                                            style={
                                                errors.lastName
                                                    ? {
                                                          border: "1px solid red",
                                                      }
                                                    : {}
                                            }
                                        />
                                        <div className="">
                                            <span className="label-text-alt">
                                                {errors.lastName && (
                                                    <p
                                                        role="alert"
                                                        className="text-red-600"
                                                    >
                                                        {
                                                            errors.lastName
                                                                .message
                                                        }
                                                    </p>
                                                )}
                                            </span>
                                        </div>
                                    </label>
                                </div>
                                <label className=" w-full max-w-xs">
                                    <div className="mt-3">Phone number</div>
                                    <input
                                        type="text"
                                        placeholder="Type here"
                                        className="w-full focus:outline-none rounded h-10 border border-gray-900 pl-2 mt-2"
                                        {...register("phoneNumber", {
                                            required: {
                                                value: true,
                                                message: "Required",
                                            },
                                            pattern: {
                                                value: /^[0-9]+$/,
                                                message: "Only number required",
                                            },
                                            minLength: {
                                                value: 11,
                                                message: "11 digit number need",
                                            },
                                        })}
                                        style={
                                            errors.phoneNumber
                                                ? {
                                                      border: "1px solid red",
                                                  }
                                                : {}
                                        }
                                    />
                                    <div className="label">
                                        <span className="label-text-alt">
                                            {errors.phoneNumber && (
                                                <p
                                                    role="alert"
                                                    className="text-red-600"
                                                >
                                                    {errors.phoneNumber.message}
                                                </p>
                                            )}
                                        </span>
                                    </div>
                                </label>

                                <label className="w-full">
                                    <div className="mt-3">Email</div>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="input input-bordered w-full focus:outline-none rounded h-10 mt-2 pl-2 border border-gray-900"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: "Required",
                                            },
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "Invalid",
                                            },
                                        })}
                                        style={
                                            errors.email
                                                ? {
                                                      border: "1px solid red",
                                                  }
                                                : {}
                                        }
                                    />
                                    <div className="label">
                                        <span className="label-text-alt">
                                            {errors.email && (
                                                <p
                                                    role="alert"
                                                    className="text-red-600"
                                                >
                                                    {errors.email.message}
                                                </p>
                                            )}
                                        </span>
                                    </div>
                                </label>

                                <label className="w-full">
                                    <div className="mt-3">Password</div>
                                    <div className="relative">
                                        <input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="Password"
                                            className="input input-bordered w-full focus:outline-none rounded h-10 border border-gray-900 mt-2 pl-2"
                                            {...register("password", {
                                                required: {
                                                    value: true,
                                                    message: "Required",
                                                },
                                                pattern: {
                                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).+$/,
                                                    message:
                                                        "Not enough strong",
                                                },
                                                minLength: {
                                                    value: 6,
                                                    message:
                                                        "6 characters need",
                                                },
                                            })}
                                            style={
                                                errors.password
                                                    ? {
                                                          border: "1px solid red",
                                                      }
                                                    : {}
                                            }
                                        />
                                        <div
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            className="absolute right-0 top-0 mt-2 mr-3 hover:cursor-pointer pt-2"
                                        >
                                            {showPassword ? (
                                                <FaEye className="h-6 w-6 text-red-500" />
                                            ) : (
                                                <FaEyeSlash className="h-6 w-6 text-red-500" />
                                            )}
                                        </div>
                                    </div>
                                    <div className="label">
                                        <span className="label-text-alt">
                                            {errors.password && (
                                                <p
                                                    role="alert"
                                                    className="text-red-600"
                                                >
                                                    {errors.password.message}
                                                </p>
                                            )}
                                        </span>
                                    </div>
                                </label>

                                <label className="w-full">
                                    <div className="mt-3">Confirm Password</div>
                                    <div className="relative">
                                        <input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="Password"
                                            className="input input-bordered w-full focus:outline-none rounded h-10 border border-gray-900 mt-2 pl-2"
                                            {...register("confirmPassword")}
                                        />
                                        <div
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            className="absolute right-0 top-0 mt-2 mr-3 hover:cursor-pointer pt-2 hidden"
                                        >
                                            {showPassword ? (
                                                <FaEye className="h-6 w-6 text-orange-500" />
                                            ) : (
                                                <FaEyeSlash className="h-6 w-6 text-orange-500" />
                                            )}
                                        </div>
                                    </div>
                                    <div className="label">
                                        <span className="label-text-alt">
                                            {errors.confirmPassword && (
                                                <p
                                                    role="alert"
                                                    className="text-red-600"
                                                >
                                                    {
                                                        errors.confirmPassword
                                                            .message
                                                    }
                                                </p>
                                            )}
                                        </span>
                                    </div>
                                </label>

                                <div className="mt-5">
                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-xs rounded border border-orange-500"
                                        onChange={() => setDisable(!disable)}
                                    />
                                    <span className="ml-2">
                                        I accept the{" "}
                                        <Link
                                            to="/"
                                            className="text-orange-500 link link-hover font-semibold"
                                        >
                                            Terms of Use
                                        </Link>
                                        &
                                        <Link
                                            to="/"
                                            className="text-orange-500 link link-hover font-semibold"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </span>
                                </div>
                                <div className="mt-5">
                                    <button
                                        disabled={disable}
                                        className="w-full bg-red-500 py-3 text-center text-white disabled:cursor-not-allowed disabled:scale-100 hover:scale-105 rounded duration-300"
                                    >
                                        Register Now
                                    </button>
                                </div>
                            </form>
                            <Divider style={{ borderColor: "#3d3d3d" }}>
                                OR
                            </Divider>

                            <div className="text-sm flex justify-between items-center mt-3">
                                <p>Already have an account...</p>
                                <Link
                                    to="/login"
                                    className="py-2 px-5 ml-3 bg-white border rounded hover:scale-110 duration-300 border-red-400  "
                                >
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
