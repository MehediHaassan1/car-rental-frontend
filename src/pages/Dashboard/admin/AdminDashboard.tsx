import { FaRegUser } from "react-icons/fa6";
import { useGetAllCarsQuery } from "../../../redux/features/car/carApi";
import { useGetAllUsersQuery } from "../../../redux/features/user/userApi";
import { IoCarSportOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { useGetAllBookingsQuery } from "../../../redux/features/booking/bookingApi";
import { TBooking } from "../../../types";
import { Table, TableProps, Tag } from "antd";

const AdminDashboard = () => {
    const { data: cars } = useGetAllCarsQuery({ price: 0 });
    const { data: users } = useGetAllUsersQuery(undefined);
    const { data: bookings } = useGetAllBookingsQuery(undefined);

    const completeBookings = bookings?.data?.filter(
        (item: TBooking) => item?.paid && item?.status === "complete"
    );

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
                                        {users?.data?.length}
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
                                        {cars?.data?.length}
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
            <Table columns={columns} scroll={{ x: "100%" }} dataSource={data} />
            ;
        </div>
    );
};

export default AdminDashboard;
