import { Dropdown, Menu, Table, Avatar, Button, Modal } from "antd";
import {
    useDeleteUsersMutation,
    useGetAllUsersQuery,
    useGetSingleUserQuery,
    useUpdateUserMutation,
} from "../../../redux/features/user/userApi";
import { FaEllipsisV } from "react-icons/fa";
import { TUser } from "../../../types";
import Swal from "sweetalert2";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import uploadImage from "../../../utils/uploadImage";

interface DataType {
    key: string;
    name: string;
    email: string;
    address: string;
    image?: string;
}

const AllUsers = () => {
    const { data: allUsers = [] } = useGetAllUsersQuery(undefined);
    const [deleteUser] = useDeleteUsersMutation();

    const dataSource: DataType[] = allUsers?.data?.map((user: TUser) => ({
        key: user._id,
        name: user.name,
        email: user.email,
        address: user.address || "N/A",
        image: user.image,
    }));

    const handleAction = (action: string, record: DataType) => {
        console.log(`Action: ${action}`, record);
    };

    const handleDelete = (id: string) => {
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
                    const res = await deleteUser(id);
                    if (res.data.success) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "User has been deleted.",
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
            key: "edit",
            label: <EditUserDataModal details={record} />,
        },
        {
            key: "delete",
            label: (
                <button onClick={() => handleDelete(record.key)}>Delete</button>
            ),
        },
        {
            key: "makeAdmin",
            label: (
                <button onClick={() => handleAction("Make admin", record)}>
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
            render: (record: DataType) => (
                <Dropdown
                    trigger={["click"]}
                    overlay={getMenu(record)}
                    placement="bottomRight"
                    className="cursor-pointer"
                >
                    <FaEllipsisV />
                </Dropdown>
            ),
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

const EditUserDataModal = ({ details }: DataType) => {
    const { data: user } = useGetSingleUserQuery(details.key);

    console.log(user?.data?._id);

    const [updateUser] = useUpdateUserMutation();
    const { register, handleSubmit, reset } = useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const { image, ...rest } = data;
        const userImage = await uploadImage(image);
        const modifiedUserData = {
            ...rest,
            image: userImage,
        };
        try {
            const res = await updateUser({
                data: modifiedUserData,
                id: details.key,
            });

            if (res.data.success) {
                Swal.fire({
                    icon: "success",
                    title: "User update successfully",
                    showConfirmButton: false,
                    timer: 3000,
                });
                reset();
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
            <button onClick={showModal}>Edit</button>
            <Modal
                title={`Update ${details.name}'s info`}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                        <div className="w-full md:w-1/2">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold">
                                        Name
                                    </span>
                                </div>
                                <input
                                    {...register("name")}
                                    type="text"
                                    className="input w-full  focus:outline-none text-lg border border-gray-700  rounded px-4 py-2"
                                    defaultValue={user?.data?.name}
                                />
                            </label>
                        </div>
                        <div className="w-full md:w-1/2">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold">
                                        Email
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    defaultValue={user?.data?.email}
                                    className="input w-full focus:outline-none text-lg border border-gray-700 rounded px-4 py-2"
                                />
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-5 mt-4">
                        <div className="w-full md:w-1/2">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold">
                                        Phone Number
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    defaultValue={user?.data?.phone}
                                    className="input w-full focus:outline-none text-lg border border-gray-700 rounded px-4 py-2 "
                                    {...register("phone", {
                                        pattern: {
                                            value: /^[0-9]+$/,
                                            message: "Only number required",
                                        },
                                        minLength: {
                                            value: 11,
                                            message: "11 digit number need",
                                        },
                                    })}
                                />
                            </label>
                        </div>
                        <div className="w-full md:w-1/2">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold">
                                        Address
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="street, city, state"
                                    defaultValue={user?.data?.address}
                                    className="input w-full focus:outline-none text-lg border border-gray-700 rounded px-4 py-2 "
                                    {...register("address")}
                                />
                            </label>
                        </div>
                    </div>

                    <div className="mt-5">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-lg font-semibold">
                                    Image
                                </span>
                            </div>
                            <input
                                {...register("image")}
                                type="file"
                                className="file-input file-input-bordered w-full  border border-gray-700 rounded px-4 py-2"
                            />
                        </label>
                    </div>

                    <div className="mt-5">
                        <input
                            type="submit"
                            value="Update"
                            className="file-input file-input-bordered w-full font-bold rounded px-4 py-2 cursor-pointer disabled:cursor-not-allowed bg-red-400 hover:bg-red-600 transition-all duration-300"
                        />
                    </div>
                </form>
            </Modal>
        </>
    );
};
