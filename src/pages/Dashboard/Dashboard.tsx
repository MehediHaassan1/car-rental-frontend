import { useAppSelector } from "../../redux/hook";
import AdminDashboard from "./admin/AdminDashboard";
import UserDashboard from "./user/UserDashboard";

const Dashboard = () => {
    const { user } = useAppSelector((state) => state.auth);
    return (
        <div className="flex flex-col items-center justify-center space-y-8 p-8">
            <h1 className="text-xl md:text-3xl font-bold">
                Welcome to{" "}
                <span className="text-red-400 font-semibold">RideEase</span>
            </h1>
            {user && user?.role === "admin" ? (
                <AdminDashboard />
            ) : (
                <UserDashboard />
            )}
        </div>
    );
};

export default Dashboard;
