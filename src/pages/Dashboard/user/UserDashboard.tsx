/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, Tag, Card } from "antd";
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useGetUserStatsQuery } from "../../../redux/features/statistics/statisticsApi";

const UserDashboard = () => {
    const { data, isLoading } = useGetUserStatsQuery({});
    if (isLoading) return <p>Loading...</p>;

    console.log(data?.data)

    // Prepare data for the chart
    const chartData = [
        { name: "Total Bookings", value: data?.data?.totalBookingsCount },
        { name: "Total Payments", value: data?.data?.totalPayableAmount },
    ];

    // Prepare data for the recent bookings table
    const recentBookingsData = data?.data?.latestBookings?.map((booking:any) => ({
        key: booking._id,   // Assuming each booking has a unique ID
        carName: booking.car.name,  // Assuming carName is a field in booking
        dropOffDate: booking.dropOffDate,
        dropOffTime: booking.dropOffTime,
        status: booking.paid ? "Paid" : "Unpaid",
    }));

    // Columns for Ant Design Table
    const columns = [
        {
            title: "Car Name",
            dataIndex: "carName",
            key: "carName",
        },
        {
            title: "Dropoff Date",
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
            dataIndex: "status",
            key: "status",
            render: (status:any) => <Tag color={status === "Paid" ? "green" : "red"}>{status}</Tag>,
        },
    ];

    return (
        <div>
            <img
                src="https://i.ibb.co/ckx55yL/user-dashboard.png"
                alt="userdashboard"
            />
            <p className="text-center text-lg font-semibold">
                Make your journey safe with us.
            </p>

            {/* Chart Section */}
            <Card className="my-4">
                <h2 className="text-center">User Statistics</h2>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                            data={chartData}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 20,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#8884d8" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </Card>

            {/* Recent Bookings Table */}
            <Card className="my-4">
                <h2 className="text-center">Recent Bookings</h2>
                <Table columns={columns} dataSource={recentBookingsData} pagination={false} />
            </Card>
        </div>
    );
};

export default UserDashboard;
