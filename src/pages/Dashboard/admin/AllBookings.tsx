import { Button, Space, Table, TableProps, Tooltip } from "antd";
import {
    useDeleteBookingMutation,
    useGetAllBookingsQuery,
} from "../../../redux/features/booking/bookingApi";
import { TBooking, TCar, TUser } from "../../../types";
import getStatusTag from "../../../utils/getStatusTag";
import { MdCancel } from "react-icons/md";
import Swal from "sweetalert2";

interface DataType {
    key: string;
    car: TCar;
    user: TUser;
    location: string;
    pickUpDate: string;
    dropOffDate: string;
    pickUpTime: string;
    dropOffTime: string;
    status: string;
}

const AllBookings = () => {
    const [deleteBooking] = useDeleteBookingMutation();
    const { data: allBooking, isLoading } = useGetAllBookingsQuery(undefined);

    if (isLoading) return <div>Loading...</div>;

    if (!allBooking?.data || allBooking.data.length === 0)
        return <div>No bookings found</div>;

    const latestBookingsData = allBooking?.data?.filter(
        (item: TBooking) => item.status !== "complete"
    );
    const completedBookingsData = allBooking.data.filter(
        (item: TBooking) => item.status === "complete"
    );

    const upcomingBookings: DataType[] = latestBookingsData.map(
        ({ car, user, ...rest }: TBooking) => {
            const pickUpDate = rest.pickUpDate || "";
            const pickUpTime = rest.pickUpTime || "";
            const dropOffDate = rest.dropOffDate || "";
            const dropOffTime = rest.dropOffTime || "";
            return {
                key: rest._id,
                car,
                user,
                location: rest.location,
                pickUpDateTime: `${pickUpDate} - ${pickUpTime}`,
                dropOffDateTime: `${dropOffDate} - ${dropOffTime}`,
                identity: rest.identity,
                identityNo: rest.identityNo,
                drivingLicenseNo: rest.drivingLicenseNo,
                pickUpDate,
                pickUpTime,
                dropOffDate,
                dropOffTime,
                status: rest.status,
            };
        }
    );
    const pastBookings: DataType[] = completedBookingsData.map(
        ({ car, user, ...rest }: TBooking) => {
            const pickUpDate = rest.pickUpDate || "";
            const pickUpTime = rest.pickUpTime || "";
            const dropOffDate = rest.dropOffDate || "";
            const dropOffTime = rest.dropOffTime || "";
            return {
                key: rest._id,
                car,
                user,
                location: rest.location,
                pickUpDateTime: `${pickUpDate} - ${pickUpTime}`,
                dropOffDateTime: `${dropOffDate} - ${dropOffTime}`,
                identity: rest.identity,
                identityNo: rest.identityNo,
                drivingLicenseNo: rest.drivingLicenseNo,
                pickUpDate,
                pickUpTime,
                dropOffDate,
                dropOffTime,
            };
        }
    );

    const handleDeleteBooking = (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await deleteBooking(id);
                    if (res.data.success) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your booking has been deleted.",
                            icon: "success",
                        });
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
            }
        });
    };

    const handleApprovedBooking = (id: string) => {
        console.log(id);
    };

    const columns: TableProps<DataType>["columns"] = [
        {
            title: "Car Name",
            dataIndex: ["car", "name"],
            key: "carName",
        },
        {
            title: "Location",
            dataIndex: "location",
            key: "location",
        },
        {
            title: "Status",
            key: "status",
            dataIndex: "status",
            render: (status) => getStatusTag(status),
        },
        {
            title: "Pick-Up Date",
            dataIndex: "pickUpDateTime",
            key: "pickUpDateTime",
        },
        {
            title: "Drop-Off Date",
            dataIndex: "dropOffDateTime",
            key: "dropOffDateTime",
        },
        {
            title: "Action",
            key: "action",
            render: (record) => {
                console.log(record);
                return (
                    <Space size="middle">
                        {record.status === "pending" ? (
                            <>
                                {" "}
                                {/* <UpdateDataModal data={record} /> */}
                                <Tooltip title="Booking Approved">
                                    <Button
                                        icon={<MdCancel />}
                                        type="text"
                                        onClick={() =>
                                            handleApprovedBooking(record.key)
                                        }
                                        style={{
                                            color: "red",
                                            padding: "0",
                                            fontSize: "20px",
                                        }}
                                    />
                                </Tooltip>
                                <Tooltip title="Cancel Booking">
                                    <Button
                                        icon={<MdCancel />}
                                        type="text"
                                        onClick={() =>
                                            handleDeleteBooking(record.key)
                                        }
                                        style={{
                                            color: "red",
                                            padding: "0",
                                            fontSize: "20px",
                                        }}
                                    />
                                </Tooltip>{" "}
                            </>
                        ) : (
                            ""
                        )}
                    </Space>
                );
            },
        },
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold w-fit border-b-2 border-gray-700 pb-2">
                Latest Bookings
            </h1>
            <Table columns={columns} dataSource={upcomingBookings} />
            <h1 className="text-2xl font-bold w-fit border-b-2 border-gray-700 pb-2">
                Booking History
            </h1>
            <Table columns={columns} dataSource={pastBookings} />
        </div>
    );
};

export default AllBookings;
