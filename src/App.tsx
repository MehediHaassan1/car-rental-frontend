import { useEffect, useRef } from "react";
import Locomotive from "locomotive-scroll";
import "./css/loco.css";
import "./App.css";
import MainLayouts from "./components/layouts/MainLayouts";

function App() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scroll = new Locomotive({
            el: containerRef.current as HTMLDivElement,
            smooth: true,
        });

        return () => {
            scroll.destroy();
        };
    }, []);

    return (
        <div className="custom-container" ref={containerRef}>
            <MainLayouts />
            
        </div>
    );
}

export default App;
