import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from "react";
import { Divider } from "antd";
import { useLoginUserMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hook";
import { setUser } from "../../redux/features/auth/authSlice";

type TLogin = {
    email: string;
    password: string;
};

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TLogin>();
    const [loginUser] = useLoginUserMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit: SubmitHandler<TLogin> = async (data) => {
        try {
            const res = await loginUser(data);
            console.log("🚀 ~ constonSubmit:SubmitHandler<TLogin>= ~ res:", res)
            
            if (res?.data?.success) {
                dispatch(
                    setUser({ user: res?.data.data, token: res?.data.token })
                );
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-[url(https://i.ibb.co/DC3J4fN/slideTwo.jpg)] bg-cover bg-center min-h-screen">
            <Helmet>
                <title>Login - RideEase</title>
            </Helmet>
            <div className=" h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5">
                <div className="max-w-screen-xl mx-auto py-16">
                    <section className="border-red-500  min-h-screen flex items-center justify-center">
                        <div className="bg-white p-5 flex items-center rounded shadow-lg max-w-3xl">
                            <div className="md:w-1/2 px-5">
                                <h2 className="text-2xl font-bold ">Login</h2>
                                <p className="text-sm mt-4 ">
                                    If you have an account, please{" "}
                                    <span className="font-bold text-red-500">
                                        login
                                    </span>
                                </p>
                                <form
                                    className="mt-6"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <label className="w-full">
                                        <div className="">
                                            <span className="">Email</span>
                                        </div>
                                        <input
                                            type="email"
                                            placeholder="john@gmail.com"
                                            className="input input-bordered w-full focus:outline-none rounded h-10 border border-red-400 px-2 mt-2"
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        "Email is required",
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
                                        <div className="">
                                            <span className="">
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
                                        <div className="mt-4">
                                            <span className="">Password</span>
                                        </div>
                                        <div className="relative mt-2">
                                            <input
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                placeholder="******"
                                                className="input input-bordered w-full focus:outline-none rounded h-10 border border-red-400 px-2"
                                                {...register("password", {
                                                    required: {
                                                        value: true,
                                                        message:
                                                            "Password is required",
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
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                                className="absolute right-0 top-0 mt-2 mr-3 hover:cursor-pointer"
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
                                                        {
                                                            errors.password
                                                                .message
                                                        }
                                                    </p>
                                                )}
                                            </span>
                                        </div>
                                    </label>

                                    <div className="mt-2">
                                        <Link
                                            to="/"
                                            className="text-sm font-semibold text-red-900 hover:underline"
                                        >
                                            Forgot Password?
                                        </Link>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full block bg-red-500 hover:bg-red-600 focus:bg-red-500 text-white font-semibold rounded
                px-4 py-3 mt-6 duration-300"
                                    >
                                        Log In
                                    </button>
                                </form>

                                <Divider style={{ borderColor: "#3d3d3d" }}>
                                    OR
                                </Divider>

                                <div className="text-sm flex justify-between items-center mt-3">
                                    <p className="text-base">
                                        If you don't have an account...
                                    </p>
                                    <Link
                                        to="/register"
                                        className="py-2 px-5 ml-3 bg-white border-2 rounded hover:scale-110 duration-300 border-gray-900  "
                                    >
                                        Register
                                    </Link>
                                </div>
                            </div>

                            <div className="w-1/2 md:block hidden ">
                                <img
                                    src="https://i.ibb.co/ySfsRXF/login.jpg"
                                    className="rounded"
                                    alt="log in image"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Login;
