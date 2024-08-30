import { Dropdown, Menu, Table, Avatar } from "antd";
import {
    useDeleteUsersMutation,
    useGetAllUsersQuery,
    useMakeAdminMutation,
} from "../../../redux/features/user/userApi";
import { FaEllipsisV } from "react-icons/fa";
import { TUser } from "../../../types";
import Swal from "sweetalert2";

interface DataType {
    key: string;
    name: string;
    email: string;
    address: string;
    image?: string;
    isDeleted: boolean;
}

const AllUsers = () => {
    const { data: allUsers = [] } = useGetAllUsersQuery(undefined);
    const [deleteUser] = useDeleteUsersMutation();
    const [makeAdmin] = useMakeAdminMutation();

    const dataSource: DataType[] = allUsers?.data?.map((user: TUser) => ({
        key: user._id,
        name: user.name,
        email: user.email,
        address: user.address || "N/A",
        image: user.image,
        isDeleted: user.isDeleted,
    }));

    const handleMakeAdmin = async (id: string) => {

        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Make admin` ,
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await makeAdmin(id);
                    if (res.data.success) {
                        Swal.fire({
                            title: `User has been made admin!`,
                            text: `User's privileges have been updated.`,
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

        /* try {
            const res = await makeAdmin(id);
            if (res.data.success) {
                Swal.fire(
                    "User has been made admin!",
                    "User's privileges have been updated.",
                    "success"
                );
            }
        } catch (error) {
            if (error) {
                Swal.fire(
                    "Failed to make admin!",
                    "User's privileges have not been updated.",
                    "error"
                );
            }
        } */
    };

    const handleUpdateStatus = (id: string, active:boolean) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `${active ? "Active" : 'Block'}` ,
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await deleteUser(id);
                    if (res.data.success) {
                        Swal.fire({
                            title: `${active ? "Activated" : 'Blocked'}`,
                            text: `User has been ${active ? "activated" : 'blocked'}.`,
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

    // Define menu items
    const getMenuItems = (record: DataType) => [
        {
            key: "delete",
            label: record.isDeleted ? (
                <button
                    className="w-full block text-left"
                    onClick={() => handleUpdateStatus(record.key, record.isDeleted)}
                >
                    Active
                </button>
            ) : (
                <button
                    className="w-full block text-left"
                    onClick={() => handleUpdateStatus(record.key, record.isDeleted)}
                >
                    Block
                </button>
            ),
        },
        {
            key: "makeAdmin",
            label: (
                <button
                    className="w-full block text-left"
                    onClick={() => handleMakeAdmin(record.key)}
                >
                    Make admin
                </button>
            ),
        },
    ];

    // Define Menu component with items
    const getMenu = (record: DataType) => <Menu items={getMenuItems(record)} />;

    const columns = [
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (image: string, record: DataType) => (
                <Avatar
                    src={image}
                    alt={record.name}
                    style={{
                        backgroundColor: "rgb(248 113 113)",
                        verticalAlign: "middle",
                    }}
                >
                    {!image && record.name.charAt(0).toUpperCase()}
                </Avatar>
            ),
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Action",
            key: "action",
            render: (record: DataType) => {
                console.log(record);
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
            <h1 className="text-2xl font-bold w-fit pb-2 border-b-2 border-gray-700">
                All Users
            </h1>
            <Table columns={columns} dataSource={dataSource} rowKey="key" />
        </div>
    );
};

export default AllUsers;
