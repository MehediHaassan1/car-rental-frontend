import {
    useDeleteCarMutation,
    useGetAllCarsQuery,
} from "../../../redux/features/car/carApi";
import { Button, Dropdown, Menu, Table, TableProps, Tag } from "antd";
import { TAdminCarsData, TCar } from "../../../types";
import { FaEllipsisV } from "react-icons/fa";
import Swal from "sweetalert2";
import CreateCarModal from "./CreateCarModal";
import UpdateCarModal from "./UpdateCarModal";



const AllCars = () => {
    const [deleteCar] = useDeleteCarMutation();
    const { data } = useGetAllCarsQuery({ price: 0 });
    const cars: TCar[] = data?.data;

    const carsData: TAdminCarsData[] = cars?.map(
        ({
            _id,
            carImage,
            name,
            carType,
            isBooked,
            pricePerHour,
            isDeleted,
        }) => ({
            key: _id as string,
            carImage,
            name,
            carType,
            isBooked,
            pricePerHour,
            isDeleted,
        })
    );

    const getMenuItems = (record: TAdminCarsData) => [
        {
            key: "delete",
            label: record.isDeleted ? (
                <button
                    className="w-full block text-left"
                    onClick={() =>
                        handleUpdateStatus(
                            record.key as string,
                            record.isDeleted
                        )
                    }
                >
                    Active
                </button>
            ) : (
                <button
                    className="w-full block text-left"
                    onClick={() =>
                        handleUpdateStatus(
                            record.key as string,
                            record.isDeleted
                        )
                    }
                >
                    Delete
                </button>
            ),
        },
        {
            key: "update-car",
            label: <UpdateCarModal data={record} />,
        },
    ];

    // Define Menu component with items
    const getMenu = (record: TAdminCarsData) => <Menu items={getMenuItems(record)} />;

    const columns: TableProps<TAdminCarsData>["columns"] = [
        {
            title: "Image",
            dataIndex: "carImage",
            key: "carImage",
            render: (carImage: string) => (
                <img src={carImage} alt="car" width="100px" height="100px" />
            ),
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Car type",
            dataIndex: "carType",
            key: "carType",
        },
        {
            title: "Price/Hour",
            dataIndex: "pricePerHour",
            key: "pricePerHour",
            render: (pricePerHour: number) => {
                return (
                    <p className="text-md font-semibold">$ {pricePerHour}</p>
                );
            },
        },
        {
            title: "Status",
            dataIndex: "isBooked",
            key: "isBooked",
            render: (isBooked: boolean) => (
                <Tag
                    color={isBooked ? "red" : "green"}
                    className="font-semibold"
                >
                    {isBooked ? "Booked" : "Available"}
                </Tag>
            ),
            filters: [
                {
                    text: "Available",
                    value: false,
                },
                {
                    text: "Booked",
                    value: true,
                },
            ],
            onFilter: (value, record) => record.isBooked === value,
            sorter: (a, b) => Number(a.isBooked) - Number(b.isBooked),
        },
        {
            title: "Action",
            key: "action",
            render: (record: TAdminCarsData) => {
                return (
                    <Dropdown
                        trigger={["click"]}
                        overlay={getMenu(record)}
                        placement="bottomRight"
                        className="cursor-pointer"
                    >
                        <Button>
                            <FaEllipsisV />
                        </Button>
                    </Dropdown>
                );
            },
        },
    ];

    const handleUpdateStatus = (id: string, isDeleted: boolean) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `${isDeleted ? "Active" : "Delete"}`,
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await deleteCar({ id, status: isDeleted });
                    if (res.data.success) {
                        Swal.fire({
                            title: `${isDeleted ? "Active" : "Delete"}`,
                            text: `Car has been ${
                                isDeleted ? "Active" : "Delete"
                            }.`,
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
    };

    return (
        <div>
            <div className="flex items-center justify-between border-b-2 border-gray-300 pb-3">
                <h1 className="text-3xl tracking-wide font-bold">All Cars</h1>
                <CreateCarModal />
            </div>
            <Table
                scroll={{ x: "100%" }}
                columns={columns}
                dataSource={carsData}
            />
            ;
        </div>
    );
};

export default AllCars;
