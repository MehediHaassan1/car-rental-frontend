import { FaHome, FaUserAlt } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { TbGitPullRequest } from "react-icons/tb";
import { FaUsers } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import { Avatar, Divider, Space } from "antd";
import { useGetMeQuery } from "../../redux/features/user/userApi";
import { MdCarCrash } from "react-icons/md";

const DashboardLayout = () => {
    const { data: user } = useGetMeQuery(undefined);
    return (
        <>
            <Helmet>
                <title>Dashboard - RideEase</title>
            </Helmet>
            <div className="max-w-screen-xl mx-auto px-4 md:px-10 lg:px-20 py-5">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-12 min-h-screen px-0">
                    <div className="md:col-span-4 lg:col-span-3 bg-primary p-4 lg:p-10 rounded-md text-center min-h-screen text-black bg-red-200">
                        {user?.data?.image ? (
                            <Space size={64} wrap>
                                <Avatar size={64} src={user?.data?.image} />
                            </Space>
                        ) : (
                            <Space size={16} wrap>
                                <Avatar
                                    size={64}
                                    style={{ fontSize: "32px" }}
                                    className="bg-red-200 font-bold text-black"
                                >
                                    {user?.data?.name?.slice(0, 1)}
                                </Avatar>
                            </Space>
                        )}

                        <div className="my-3">
                            <h2 className="text-xl capitalize text-txt">
                                {user?.data?.name}
                            </h2>
                            <h2 className="text-md text-txt">
                                REID : {user?.data?._id?.slice(0, 6)}
                            </h2>
                        </div>
                        <div className="my-5 bg-primary space-y-4">
                            <NavLink
                                className="flex items-center gap-2 border p-2 rounded-md text-txt"
                                to="profile"
                            >
                                <FaUserAlt className="w-5 h-5 text-accent"></FaUserAlt>{" "}
                                Profile
                            </NavLink>
                            {user?.data?.role === "user" && (
                                <>
                                    <NavLink
                                        className="flex items-center gap-2 border p-2 rounded-md text-txt"
                                        to="my-bookings"
                                    >
                                        <TbGitPullRequest className="w-5 h-5 text-accent"></TbGitPullRequest>{" "}
                                        My Bookings
                                    </NavLink>
                                </>
                            )}

                            {user?.data?.role === "admin" && (
                                <>
                                    <NavLink
                                        className="flex items-center gap-2 border p-2 rounded-md text-txt"
                                        to="all-users"
                                    >
                                        <FaUsers className="w-5 h-5 text-accent"></FaUsers>
                                        Users
                                    </NavLink>
                                    <NavLink
                                        className="flex items-center gap-2 border p-2 rounded-md text-txt"
                                        to="all-bookings"
                                    >
                                        <TbGitPullRequest className="w-5 h-5 text-accent"></TbGitPullRequest>
                                        Bookings
                                    </NavLink>
                                    <NavLink
                                        className="flex items-center gap-2 border p-2 rounded-md text-txt"
                                        to="all-cars"
                                    >
                                        <MdCarCrash className="w-5 h-5 text-accent"></MdCarCrash>
                                        Cars
                                    </NavLink>
                                </>
                            )}

                            <Divider style={{ color: "gray" }}></Divider>
                            <NavLink
                                className="flex items-center gap-2 border p-2 rounded-md text-txt"
                                to="/"
                            >
                                <FaHome className="w-5 h-5 text-accent"></FaHome>
                                Home
                            </NavLink>
                        </div>
                    </div>
                    <div className="md:col-span-8 lg:col-span-9 p-4 lg:p-10 rounded-md bg-red-50">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
