import { useAppSelector } from "../../redux/hook";

const Dashboard = () => {
    const {user} = useAppSelector(state => state.auth)
    console.log(user)
    return (
        <div className="flex flex-col items-center justify-center space-y-8 p-8">
            <h1 className="text-3xl font-bold">
                Welcome to <span className="text-red-400 font-semibold">RideEase</span>
            </h1>
            <img src="heelo.png" alt="lab" className="md:w-4/6" />
            <div className="w-full max-w-4xl">LatestRe</div>
            <div className="w-full max-w-4xl">Stats</div>
        </div>
    );
};

export default Dashboard;
