import { Button, Space, TableProps, Tag, Tooltip } from "antd";
import { TBookingDataType } from "../types";
import getStatusTag from "./getStatusTag";
import { MdCancel } from "react-icons/md";
import UpdateDataModal from "../components/ui/UpdateDataModal";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";


const getColumns = (
    data?: TBookingDataType[],
    handleAction?: (id: string, action: string) => void,
    role?: string,
    position?: string
): TableProps<TBookingDataType>["columns"] => {
    const isPaid = data!.some((record) => record.paid === true);

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
            title: "Pickup Time",
            dataIndex: "pickUpTime",
            key: "pickUpTime",
        },
        {
            title: "Total Cost",
            dataIndex: "totalCost",
            key: "totalCost",
            render: (totalCost) => <strong>{`$ ${totalCost}`}</strong>,
        },
        {
            title: "Status",
            key: "status",
            dataIndex: "status",
            render: (status) => getStatusTag(status),
        },
    ];

    if (isPaid) {
        columns.splice(4, 0, {
            title: "Dropoff Time",
            dataIndex: "dropOffTime",
            key: "dropOffTime",
        });
    }

    if (!isPaid) {
        columns.push({
            title: "Action",
            key: "action",
            render: (record) => {
                const { status, dropOffDate } = record;
                if (status !== "completed" && !dropOffDate) {
                    return (
                        <Space size="middle">
                            {role && role === "admin" ? (
                                status === "pending" ? (
                                    <Tooltip title="Approved Booking">
                                        <Button
                                            icon={<IoIosCheckmarkCircle />}
                                            type="text"
                                            onClick={() =>
                                                handleAction!(
                                                    record.key,
                                                    "approvedBooking"
                                                )
                                            }
                                            style={{
                                                color: "green",
                                                padding: "0",
                                                fontSize: "20px",
                                            }}
                                        />
                                    </Tooltip>
                                ) : (
                                    <Tooltip title="Return car">
                                        <Button
                                            icon={<MdLogout />}
                                            type="text"
                                            onClick={() =>
                                                handleAction!(
                                                    record.key,
                                                    "returnCar"
                                                )
                                            }
                                            style={{
                                                color: "green",
                                                padding: "0",
                                                fontSize: "20px",
                                            }}
                                        />
                                    </Tooltip>
                                )
                            ) : (
                                <>
                                    {status === "ongoing" ? (
                                        <Tooltip title="Ongoing process">
                                            <Button
                                                icon={<FaCircleInfo />}
                                                type="text"
                                                disabled={true}
                                                style={{
                                                    color: "rgb(69 10 10)",
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
                                    onClick={() =>
                                        handleAction!(
                                            record.key,
                                            "cancelBooking"
                                        )
                                    }
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
                    return (
                        <Tooltip title="Pay">
                            <Button
                                icon={<FaHandHoldingDollar />}
                                type="text"
                                disabled={
                                    status === "complete" && role === "admin"
                                }
                                onClick={() => handleAction!(record.key, "pay")}
                                style={{
                                    color: "green",
                                    padding: "0",
                                    fontSize: "20px",
                                }}
                            />
                        </Tooltip>
                    );
                }
            },
        });
    }

    if (position === "past") {
        columns.pop();
    }
    if (position === "past") {
        columns.push({
            title: "Payment",
            key: "pay",
            render: (record) => {
                return (
                    <strong>
                        {record.paid ? (
                            <Tag color="green">Paid</Tag>
                        ) : (
                            <Tag color="red">Unpaid</Tag>
                        )}
                    </strong>
                );
            },
        });
    }

    return columns;
};

export default getColumns;
