/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useUpdateBookingMutation } from "../../redux/features/booking/bookingApi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Button, Modal, Tooltip } from "antd";
import { FaEdit } from "react-icons/fa";

const UpdateDataModal = ({ data }: any) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [updateBooking] = useUpdateBookingMutation();

    const { register, handleSubmit } = useForm();

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
        };

        try {
            const res = await updateBooking({ bookingData, id: data.key });
            if (res.data.success) {
                Swal.fire({
                    icon: "success",
                    title: "Updated successful",
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

export default UpdateDataModal;
