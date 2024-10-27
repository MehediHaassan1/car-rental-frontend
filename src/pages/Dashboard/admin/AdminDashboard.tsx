import { FaRegUser } from "react-icons/fa6";
import { IoCarSportOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { useGetAllBookingsQuery } from "../../../redux/features/booking/bookingApi";
import { TBooking } from "../../../types";
import { Card, Table, TableProps, Tag } from "antd";
import { useGetAdminStatsQuery } from "../../../redux/features/statistics/statisticsApi";
import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } from "recharts"

const AdminDashboard = () => {
    const {
        data: adminStats,
        isLoading,
        error,
    } = useGetAdminStatsQuery(undefined, {
        pollingInterval: 30000,
    });

    const { data: bookings } = useGetAllBookingsQuery(undefined);

    const completeBookings = bookings?.data?.filter(
        (item: TBooking) => item?.paid && item?.status === "complete"
    ).slice(0,3);

    const totalRevenue = completeBookings?.reduce(
        (acc: number, item: TBooking) => {
            if (item?.paid && item?.status === "complete") {
                return acc + item.totalCost;
            }
            return acc;
        },
        0
    );

    interface DataType {
        key: string;
        name: string;
        drivingLicense: number;
        dropOffDate: string;
        dropOffTime: string;
        paid: boolean;
    }

    const columns: TableProps<DataType>["columns"] = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Driving License",
            dataIndex: "drivingLicense",
            key: "drivingLicense",
        },

        {
            title: "Dropoff date",
            dataIndex: "dropOffDate",
            key: "dropOffDate",
        },
        {
            title: "Dropoff Time",
            dataIndex: "dropOffTime",
            key: "dropOffTime",
        },
        {
            title: "Status",
            dataIndex: "paid",
            key: "paid",
            render: (paid) => <Tag>{paid ? "Paid" : "Unpaid"}</Tag>,
        },
    ];

    const data: DataType[] = completeBookings?.map(
        ({
            user,
            drivingLicenseNo,
            paid,
            dropOffDate,
            dropOffTime,
        }: TBooking) => {
            return {
                name: user?.name,
                drivingLicense: drivingLicenseNo,
                dropOffDate,
                dropOffTime,
                paid,
            };
        }
    );

    const datas = [
        {
            total: "total",
            users: adminStats?.data?.user,
            cars: adminStats?.data?.cars,
            bookings: adminStats?.data?.booking,
            revenue: totalRevenue,
        },
    ];

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading statistics.</p>;


    return (
        <div className="min-h-screen w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                <div className="w-full col-span-1">
                    <div className="bg-gray-600  rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                        <div className="flex items-center justify-between">
                            <div className="rounded-lg p-4 flex flex-col">
                                <div>
                                    <h5 className="text-white text-2xl font-bold leading-none">
                                        Users
                                    </h5>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-lg text-white font-bold">
                                        {adminStats?.data?.user}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <FaRegUser className="text-6xl text-white" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full col-span-1">
                    <div className="bg-gray-600  rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                        <div className="flex items-center justify-between">
                            <div className="rounded-lg p-4 flex flex-col">
                                <div>
                                    <h5 className="text-white text-2xl font-bold leading-none">
                                        Cars
                                    </h5>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-lg text-white font-bold">
                                        {adminStats?.data?.cars}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <IoCarSportOutline className="text-6xl text-white" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full col-span-1">
                    <div className="bg-gray-600  rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                        <div className="flex items-center justify-between">
                            <div className="rounded-lg p-4 flex flex-col">
                                <div>
                                    <h5 className="text-white text-2xl font-bold leading-none">
                                        Revenue
                                    </h5>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-lg text-white font-bold">
                                        $ {totalRevenue}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <HiOutlineCurrencyDollar className="text-6xl text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Card className="w-full max-w-4xl">
                <div  className="text-center">
                    <h1 className="text-3xl">Combined Business Metrics</h1>
                    <p className="text-lg">
                        Users, Cars, Bookings, Revenue, and Cumulative Revenue
                    </p>
                </div>
                <div>
                    <div className="h-[400px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart
                                data={datas}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 20,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="total" />
                                <YAxis yAxisId="left" />
                                <YAxis yAxisId="right" orientation="right" />
                                <Tooltip />
                                <Legend />
                                <Bar
                                    yAxisId="left"
                                    dataKey="users"
                                    fill="red"
                                    name="Users"
                                />
                                <Bar
                                    yAxisId="left"
                                    dataKey="cars"
                                    fill="purple"
                                    name="Cars"
                                />
                                <Bar
                                    yAxisId="left"
                                    type="monotone"
                                    dataKey="bookings"
                                    fill="gray"
                                    name="Total Bookings"
                                />
                                <Bar
                                    yAxisId="right"
                                    type="monotone"
                                    dataKey="revenue"
                                    fill="blue"
                                    name="Monthly Revenue"
                                />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </Card>
            <Table columns={columns} scroll={{ x: "100%" }} dataSource={data} />
        </div>
    );
};

export default AdminDashboard;
