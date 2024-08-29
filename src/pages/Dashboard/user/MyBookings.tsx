/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from "moment";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import DatePicker from "react-datepicker";
import { MdCancel } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import { TBooking, TCar, TUser } from "../../../types";
import { Button, Modal, Space, Table, TableProps, Tooltip } from "antd";
import {
    useDeleteBookingMutation,
    useMyBookingsQuery,
    useUpdateBookingMutation,
} from "../../../redux/features/booking/bookingApi";
import {} from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import getStatusTag from "../../../utils/getStatusTag";

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

const MyBookings = () => {
    const { data: myBookings, isLoading } = useMyBookingsQuery(undefined);
    const [deleteBooking] = useDeleteBookingMutation();

    if (isLoading) return <div>Loading...</div>;
    if (!myBookings?.data || myBookings.data.length === 0)
        return <div>No bookings found</div>;

    const upComingBookingsData = myBookings.data.filter(
        (item: TBooking) => item.status !== "complete"
    );
    const completedBookingsData = myBookings.data.filter(
        (item: TBooking) => item.status === "complete"
    );

    const upcomingBookings: DataType[] = upComingBookingsData.map(
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
                                <UpdateDataModal data={record} />
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
                            text: "Your file has been deleted.",
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

    return (
        <div>
            <h1 className="text-2xl font-bold w-fit border-b-2 border-gray-700 pb-2">
                Upcoming Booking
            </h1>
            <Table columns={columns} dataSource={upcomingBookings} />
            <h1 className="text-2xl font-bold w-fit border-b-2 border-gray-700 pb-2">
                Booking History
            </h1>
            <Table columns={columns} dataSource={pastBookings} />
        </div>
    );
};

export default MyBookings;

const UpdateDataModal = ({ data }: any) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(moment().add(24, "hours").toDate());

    const [updateBooking] = useUpdateBookingMutation();

    const { register, handleSubmit } = useForm();

    const pickUpDate = moment(startDate).format("DD/MM/YYYY");
    const pickUpTime = moment(startDate).format("HH:mm");

    const dropOffDate = moment(endDate).format("DD/MM/YYYY");
    const dropOffTime = moment(endDate).format("HH:mm");

    const minTime = moment().toDate();
    const maxTime = moment().endOf("day").toDate();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onSubmit: SubmitHandler<FieldValues> = async (updateData) => {
        const bookingData = {
            identity: updateData?.identity,
            identityNo: updateData?.identityNo,
            drivingLicenseNo: updateData?.drivingLicenseNo,
            pickUpDate: pickUpDate,
            pickUpTime: pickUpTime,
            dropOffDate: dropOffDate,
            dropOffTime: dropOffTime,
        };

        try {
            const res = await updateBooking({ bookingData, id: data.key });
            if (res.data.success) {
                Swal.fire({
                    icon: "success",
                    title: "Booking successful",
                    showConfirmButton: false,
                    timer: 1500,
                });
                setIsModalOpen(false);
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
    };

    return (
        <>
            <Tooltip title="Edit Booking">
                <Button
                    icon={<FaEdit />}
                    type="text"
                    style={{
                        color: "green",
                        padding: "0",
                        fontSize: "20px",
                    }}
                    onClick={showModal}
                />
            </Tooltip>
            <Modal
                open={isModalOpen}
                title="Update booking info"
                onCancel={handleCancel}
                footer={null}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex mb-3">
                        <div className="col-span-1 lg:col-span-2 md:col-span-2 w-full flex flex-col">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Pick-up date & time
                            </label>
                            <DatePicker
                                className="custom-datepicker bg-white border text-gray-900 text-sm rounded block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2.5 dark:text-white shadow-lg"
                                selected={startDate}
                                onChange={(date) => {
                                    setStartDate(date as Date);
                                    setEndDate(
                                        moment(date).add(24, "hours").toDate()
                                    );
                                }}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={30}
                                dateFormat="dd/MM/yyyy HH:mm"
                                minDate={new Date()}
                                minTime={
                                    startDate &&
                                    moment().isSame(startDate, "day")
                                        ? minTime
                                        : undefined
                                }
                                maxTime={
                                    startDate &&
                                    moment().isSame(startDate, "day")
                                        ? maxTime
                                        : undefined
                                }
                            />
                        </div>

                        <div className="col-span-1 lg:col-span-2 md:col-span-2 w-full flex flex-col">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Drop-off date & time
                            </label>
                            <DatePicker
                                className="bg-white border text-gray-900 text-sm rounded block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2.5 dark:text-white shadow-lg"
                                selected={endDate}
                                onChange={(date) => setEndDate(date as Date)}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={30}
                                dateFormat="dd/MM/yyyy HH:mm"
                                minDate={moment(startDate)
                                    .add(24, "hours")
                                    .toDate()} // Ensure 24 hours after pickup
                                minTime={
                                    endDate && moment().isSame(endDate, "day")
                                        ? minTime
                                        : undefined
                                }
                                maxTime={
                                    endDate && moment().isSame(endDate, "day")
                                        ? maxTime
                                        : undefined
                                }
                            />
                        </div>
                    </div>

                    <div className="flex flex-col mb-3">
                        <label>NID/PASSPORT</label>
                        <select
                            className="mt-1 bg-white border text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg"
                            {...register("identity")}
                        >
                            <option
                                value="nid"
                                selected={data.identity === "nid"}
                            >
                                NID
                            </option>
                            <option
                                value="passport"
                                selected={data.identity === "passport"}
                            >
                                Passport
                            </option>
                        </select>
                    </div>

                    <div className="flex flex-col mb-3">
                        <label>NID/PASSPORT No.</label>
                        <input
                            className="mt-1 bg-white border text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg"
                            {...register("identityNo")}
                            defaultValue={data.identityNo}
                        />
                    </div>

                    <div className="flex flex-col mb-3">
                        <label>Driving License No.</label>
                        <input
                            className="mt-1 bg-white border text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg"
                            {...register("drivingLicenseNo")}
                            defaultValue={data.drivingLicenseNo}
                        />
                    </div>

                    <div className="mb-4 font-bold  ">
                        <p>
                            <span className="text-md  text-red-500">
                                NOTE :
                            </span>{" "}
                            Update date & time otherwise it will be the present
                            date
                        </p>
                    </div>

                    <div className="space-x-4">
                        <Button key="back" onClick={handleCancel}>
                            Cancel
                        </Button>
                        <Button
                            key="submit"
                            type="primary"
                            // loading={isLoading}
                            htmlType="submit"
                            style={{ backgroundColor: "red" }}
                        >
                            Update
                        </Button>
                    </div>
                </form>
            </Modal>
        </>
    );
};
