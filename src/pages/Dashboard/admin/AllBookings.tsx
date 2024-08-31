import { Table } from "antd";
import {
    useDeleteBookingMutation,
    useGetAllBookingsQuery,
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
                                text: "Your booking has been approved.",
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
        }

        if (action === "cancelBooking") {
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
        user!.role
    );

    return (
        <div>
            <h1 className="text-2xl font-bold w-fit border-b-2 border-gray-700 pb-2">
                Latest Bookings
            </h1>
            <Table
                columns={upcomingBookingsColumns}
                dataSource={upcomingBookings}
            />
            <h1 className="text-2xl font-bold w-fit border-b-2 border-gray-700 pb-2">
                Booking History
            </h1>
            <Table columns={pastBookingsColumns} dataSource={pastBookings} />
        </div>
    );
};

export default AllBookings;
