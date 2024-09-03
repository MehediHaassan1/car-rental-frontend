import { Outlet } from "react-router-dom";
import NavBar from "../ui/Navbar";
import Footer from "../ui/Footer";

const MainLayouts = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayouts;
