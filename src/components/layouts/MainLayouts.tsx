import { Outlet } from "react-router-dom";
import NavBar from "../ui/Navbar";
import Footer from "../ui/Footer";
import { useEffect, useRef } from "react";
import Locomotive from "locomotive-scroll";
import { useLocation } from "react-router-dom";
import "../../css/loco.css";

const MainLayouts = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const location = useLocation();
    const scrollRef = useRef<Locomotive | null>(null);

    useEffect(() => {
        if (containerRef.current) {
            scrollRef.current = new Locomotive({
                el: containerRef.current,
                smooth: true,
            });
        }

        return () => {
            scrollRef.current?.destroy();
        };
    }, []);

    useEffect(() => {
        scrollRef.current?.update();
    }, [location]);

    return (
        <div
            
        >
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayouts;
