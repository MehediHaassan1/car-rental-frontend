import { CiMail } from "react-icons/ci";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactUs = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        if (data) {
            Swal.fire({
                icon: "success",
                title: "Thanks",
                text: "We will shortly notify you.",
                showConfirmButton: false,
                timer: 1500,
            });
            reset();
        }
    };

    const handleSocialMediaClick = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <div className="relative mx-auto w-full max-w-7xl bg-white text-gray-700 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="order-1 col-span-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.95338886736!2d90.41968899999999!3d23.7808405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1725184361207!5m2!1sen!2sbd"
                        width="100%"
                        height="300px"
                        title="map"
                        scrolling="no"
                        frameBorder="0"
                        className=""
                        loading="lazy"
                    ></iframe>
                </div>

                <div className="order-3 md:order-2 col-span-full md:col-span-1 py-5 md:py-10 px-6">
                    <form
                        className="mx-auto max-w-xl space-y-4"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div>
                            <label htmlFor="name" className="sr-only">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Name"
                                className="input input-bordered w-full focus:outline-none rounded h-10 border border-gray-700 px-2"
                                {...register("name", {
                                    required: "Name is required",
                                })}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                placeholder="Email Address"
                                className="input input-bordered w-full focus:outline-none rounded h-10 border border-gray-700 px-2"
                                {...register("email", {
                                    required: "Email is required",
                                })}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="message" className="sr-only">
                                Message
                            </label>

                            <textarea
                                id="message"
                                placeholder="Your message"
                                className="resize-none w-full h-32 p-4 border rounded-md shadow-sm bg-gray-50 placeholder-gray-400 transition duration-150 ease-in-out border-gray-700 outline-none"
                                {...register("message", {
                                    required: "Message is required",
                                })}
                            />
                            {errors.message && (
                                <p className="mt-2 text-red-500 text-sm">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="py-2 px-6 rounded bg-green-400 text-base text-black font-semibold uppercase hover:bg-green-500"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                <div className="order-2 md:order-3 col-span-full md:col-span-1 py-5 md:py-10 px-6">
                    <div className="mx-auto max-w-xl flex flex-col space-y-5">
                        <h2 className="text-4xl font-oswald uppercase">
                            Get in Touch
                        </h2>

                        <p className="text-sm text-gray-500">
                            We are here to assist you with any questions or
                            concerns regarding our car rental services. Feel
                            free to reach out to us through the contact form or
                            via the contact details below.
                        </p>
                        <a
                            href="mailto:contact@carrentals.com"
                            className="inline-flex items-center text-sm text-blue-400 font-semibold hover:text-blue-500"
                        >
                            <CiMail className="mr-2 w-5 text-gray-400" />
                            contact@carrentals.com
                        </a>
                        <p className="text-md text-gray-500 leading-6">
                            123 Car Rental Ave, <br /> Dhaka, Bangladesh
                            <br /> (+880) 12345 56789
                        </p>
                        <div className="flex items-center">
                            <button
                                onClick={() =>
                                    handleSocialMediaClick(
                                        "https://twitter.com"
                                    )
                                }
                                className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-[#1DA1F2] text-white filter hover:brightness-125"
                            >
                                <FaTwitter className="w-4 h-4 fill-current" />
                            </button>
                            <button
                                onClick={() =>
                                    handleSocialMediaClick(
                                        "https://facebook.com"
                                    )
                                }
                                className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-[#4267B2] text-white filter hover:brightness-125"
                            >
                                <FaFacebookF className="w-5 h-5 fill-current" />
                            </button>
                            <button
                                onClick={() =>
                                    handleSocialMediaClick(
                                        "https://instagram.com"
                                    )
                                }
                                className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white filter hover:brightness-125"
                            >
                                <FaInstagram className="w-4 h-4 fill-current" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
