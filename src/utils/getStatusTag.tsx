import { Tag } from "antd";

const getStatusTag = (status: string) => {
    switch (status) {
        case "complete":
            return <Tag color="green">Complete</Tag>;
        case "ongoing":
            return <Tag color="blue">In Progress</Tag>;
        case "pending":
            return <Tag color="yellow" >Pending</Tag>;
        default:
            return <Tag color="default">{status}</Tag>;
    }
};

export default getStatusTag;
