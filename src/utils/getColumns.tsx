import { Button, Space, TableProps, Tooltip } from "antd";
import { TBookingDataType } from "../types";
import getStatusTag from "./getStatusTag";
import { MdCancel } from "react-icons/md";
import UpdateDataModal from "../components/ui/UpdateDataModal";
import { IoIosCheckmarkCircle } from "react-icons/io";

const getColumns = (
    data?: TBookingDataType[],
    handleAction?: (id: string, action: string) => void,
    role?: string
): TableProps<TBookingDataType>["columns"] => {
    const hasDropOffDate = data!.some((record) => record.dropOffDate);

    const columns: TableProps<TBookingDataType>["columns"] = [
        {
            title: "Car Name",
            dataIndex: ["car", "name"],
            key: "carName",
        },
        {
            title: "Driving License",
            dataIndex: "drivingLicenseNo",
            key: "drivingLicenseNo",
        },
        {
            title: "Pickup Date",
            dataIndex: "pickUpDate",
            key: "pickUpDate",
        },
        {
            title: "Status",
            key: "status",
            dataIndex: "status",
            render: (status) => getStatusTag(status),
        },
    ];

    if (hasDropOffDate) {
        columns.splice(3, 0, {
            title: "Dropoff Date",
            dataIndex: "dropOffDate",
            key: "dropOffDate",
        });
    }

    if (hasDropOffDate) {
        columns.splice(4, 0, {
            title: "Total Cost",
            dataIndex: "totalCost",
            key: "totalCost",
            render: (totalCost) => <strong>{`$ ${totalCost}`}</strong>,
        });
    }

    if (!hasDropOffDate) {
        columns.push({
            title: "Action",
            key: "action",
            render: (record) => {
                const { status, dropOffDate } = record;

                if (status !== "completed" && !dropOffDate) {
                    return (
                        <Space size="middle">
                            {role && role === "admin" ? (
                                <Tooltip title="Approved Booking">
                                    <Button
                                        icon={<IoIosCheckmarkCircle />}
                                        type="text"
                                        disabled={status === "ongoing"}
                                        onClick={() =>
                                            handleAction!(record.key, 'approvedBooking')
                                        }
                                        style={{
                                            color: "green",
                                            padding: "0",
                                            fontSize: "20px",
                                        }}
                                    />
                                </Tooltip>
                            ) : (
                                <>
                                    {status === "ongoing" ? (
                                        <Tooltip title="Complete Booking">
                                            <Button
                                                icon={<IoIosCheckmarkCircle />}
                                                type="text"
                                                onClick={() =>
                                                    handleAction!(record.key, 'completeBooking')
                                                }
                                                style={{
                                                    color: "green",
                                                    padding: "0",
                                                    fontSize: "20px",
                                                }}
                                            />
                                        </Tooltip>
                                    ) : (
                                        <UpdateDataModal data={record} />
                                    )}
                                </>
                            )}

                            <Tooltip title="Cancel Booking">
                                <Button
                                    icon={<MdCancel />}
                                    type="text"
                                    disabled={
                                        status === "ongoing" && role === "user"
                                    }
                                    onClick={() => handleAction!(record.key, "cancelBooking")}
                                    style={{
                                        color: "red",
                                        padding: "0",
                                        fontSize: "20px",
                                    }}
                                />
                            </Tooltip>
                        </Space>
                    );
                } else {
                    return null;
                }
            },
        });
    }

    return columns;
};

export default getColumns;
