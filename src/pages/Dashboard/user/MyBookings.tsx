import { Table } from "antd";
import {
    useMyBookingsQuery,
    useDeleteBookingMutation,
    useBookingUpdateCompleteMutation,
} from "../../../redux/features/booking/bookingApi";
import getColumns from "../../../utils/getColumns";

import Swal from "sweetalert2";
import { TBooking, TBookingDataType } from "../../../types";
import getBookingRowData from "../../../utils/getBookingRowData";
import { useAppSelector } from "../../../redux/hook";

const MyBookings = () => {
    const { user } = useAppSelector((state) => state.auth);
    const { data: myBookings, isLoading } = useMyBookingsQuery(undefined);
    const [deleteBooking] = useDeleteBookingMutation();
    const [updateBookingComplete] = useBookingUpdateCompleteMutation();

    if (isLoading) return <div>Loading...</div>;
    if (!myBookings?.data || myBookings.data.length === 0)
        return <div>No bookings found</div>;

    // Step 2: Filter data and map using the common function
    const upComingBookingsData = myBookings.data.filter(
        (item: TBooking) => item.status !== "complete"
    );

    const completedBookingsData = myBookings.data.filter(
        (item: TBooking) => item.status === "complete"
    );

    const upcomingBookings: TBookingDataType[] =
        upComingBookingsData.map(getBookingRowData);

    const pastBookings: TBookingDataType[] =
        completedBookingsData.map(getBookingRowData);

    const handleActions = (id: string, action: string) => {
        if (action === "cancelBooking") {
            Swal.fire({
                title: "Are you sure?",
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

        if (action === "completeBooking") {
            Swal.fire({
                title: "Are you sure?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, complete it!",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const res = await updateBookingComplete(id);
                        if (res.data.data.payment_url) {
                            window.location.href = res.data.data.payment_url;
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

    const upcomingBookingsColumns = getColumns(
        upcomingBookings,
        handleActions,
        user!.role
    );

    const pastBookingsColumns = getColumns(pastBookings, undefined, user!.role);

    return (
        <div>
            <h1 className="text-2xl font-bold w-fit border-b-2 border-gray-700 pb-2">
                My Bookings
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

export default MyBookings;
