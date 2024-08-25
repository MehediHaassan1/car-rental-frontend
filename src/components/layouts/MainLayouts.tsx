import { Outlet } from "react-router-dom";
import NavBar from "../ui/Navbar";

const MainLayouts = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            
        </div>
    );
};

export default MainLayouts;
