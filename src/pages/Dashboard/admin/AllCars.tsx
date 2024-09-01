import { FaPlus } from "react-icons/fa6";
import { useGetAllCarsQuery } from "../../../redux/features/car/carApi";
import { Dropdown, Menu, Table, TableProps, Tag } from "antd";
import { TCar } from "../../../types";
import { FaEllipsisV } from "react-icons/fa";

interface DataType {
    key: React.Key;
    name: string;
    carType: string;
    isBooked: boolean;
    carImage: string;
    isDeleted: boolean;
}

const AllCars = () => {
    const { data } = useGetAllCarsQuery({ price: 0 });
    const cars: TCar[] = data?.data;
    // console.log(cars);

    const carsData: DataType[] = cars?.map(
        ({
            _id,
            carImage,
            name,
            carType,
            isBooked,
            pricePerHour,
            isDeleted,
        }) => ({
            key: _id,
            carImage,
            name,
            carType,
            isBooked,
            pricePerHour,
            isDeleted,
        })
    );
    console.log(carsData);

    const getMenuItems = (record: DataType) => [
        {
            key: "delete",
            label: record.isDeleted ? (
                <button
                    className="w-full block text-left"
                    // onClick={() =>
                    //     handleUpdateStatus(record.key, record.isDeleted)
                    // }
                >
                    Active
                </button>
            ) : (
                <button
                    className="w-full block text-left"
                    // onClick={() =>
                    //     handleUpdateStatus(record.key, record.isDeleted)
                    // }
                >
                    Delete
                </button>
            ),
        },
        {
            key: "makeAdmin",
            label: (
                <button
                    className="w-full block text-left"
                    // onClick={() => handleMakeAdmin(record.key)}
                >
                    Update
                </button>
            ),
        },
    ];

    // Define Menu component with items
    const getMenu = (record: DataType) => <Menu items={getMenuItems(record)} />;

    const columns: TableProps<DataType>["columns"] = [
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
            title: "Price/Day",
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
            render: (record: DataType) => {
                return (
                    <Dropdown
                        trigger={["click"]}
                        overlay={getMenu(record)}
                        placement="bottomRight"
                        className="cursor-pointer"
                    >
                        <FaEllipsisV />
                    </Dropdown>
                );
            },
        },
    ];

    return (
        <div>
            <div className="flex items-center justify-between border-b-2 border-gray-300 pb-3">
                <h1 className="text-3xl tracking-wide font-bold">All Cars</h1>
                <button className="bg-red-500 rounded py-1 px-3 font-bold hover:scale-110 duration-300 flex items-center justify-around gap-1">
                    <FaPlus />
                    Add Car
                </button>
            </div>
            <Table columns={columns} dataSource={carsData} />;
        </div>
    );
};

export default AllCars;
