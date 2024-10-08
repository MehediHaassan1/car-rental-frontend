import { Table } from "antd";
import {
    useDeleteBookingMutation,
    useGetAllBookingsQuery,
    useReturnCarMutation,
    useUpdateBookingStatusMutation,
} from "../../../redux/features/booking/bookingApi";
import { TBooking, TBookingDataType } from "../../../types";
import Swal from "sweetalert2";
import getBookingRowData from "../../../utils/getBookingRowData";
import getColumns from "../../../utils/getColumns";
import { useAppSelector } from "../../../redux/hook";

const AllBookings = () => {
    const { user } = useAppSelector((state) => state.auth);
    const [updateStatus] = useUpdateBookingStatusMutation();
    const [returnCar] = useReturnCarMutation();
    const [deleteBooking] = useDeleteBookingMutation();
    const { data: allBooking, isLoading } = useGetAllBookingsQuery(undefined);

    if (isLoading) return <div>Loading...</div>;

    if (!allBooking?.data || allBooking.data.length === 0)
        return <div>No bookings found</div>;

    const latestBookingsData = allBooking?.data?.filter(
        (item: TBooking) =>
            item.status !== "complete" ||
            (item.status === "complete" && item.paid === false)
    );

    console.log(allBooking?.data);

    const completedBookingsData = allBooking.data.filter(
        (item: TBooking) => item.paid === true && item.status === "complete"
    );

    const handleActions = (id: string, action: string) => {
        if (action === "approvedBooking") {
            Swal.fire({
                title: "Are you sure?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, approved it!",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const res = await updateStatus(id);
                        if (res.data.success) {
                            Swal.fire({
                                title: "Approved!",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 3000,
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
        }

        if (action === "cancelBooking") {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, cancel it!",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const res = await deleteBooking(id);
                        if (res.data.success) {
                            Swal.fire({
                                title: "Canceled!",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 3000,
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
        }

        if (action === "returnCar") {
            Swal.fire({
                title: "Are you sure?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, return it!",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const res = await returnCar(id);
                        if (res.data.success) {
                            Swal.fire({
                                title: "Returned!",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 3000,
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
        }
    };

    const upcomingBookings: TBookingDataType[] =
        latestBookingsData.map(getBookingRowData);

    const pastBookings: TBookingDataType[] =
        completedBookingsData.map(getBookingRowData);

    const upcomingBookingsColumns = getColumns(
        upcomingBookings,
        handleActions,
        user!.role
    );

    const pastBookingsColumns = getColumns(
        completedBookingsData,
        handleActions,
        user!.role,
        "past"
    );

    return (
        <div>
            <h1 className="text-2xl font-bold w-fit border-b-2 border-gray-700 pb-2">
                Latest Bookings
            </h1>
            <Table
                scroll={{ x: "100%" }}
                columns={upcomingBookingsColumns}
                dataSource={upcomingBookings}
            />
            <h1 className="text-2xl font-bold w-fit border-b-2 border-gray-700 pb-2">
                Booking History
            </h1>
            <Table
                scroll={{ x: "100%" }}
                columns={pastBookingsColumns}
                dataSource={pastBookings}
            />
        </div>
    );
};

export default AllBookings;
