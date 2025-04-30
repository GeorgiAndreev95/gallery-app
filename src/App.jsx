import { useState, useEffect } from "react";
import { Outlet } from "react-router";

import Home from "./pages/Home";
import Header from "./components/Header/Header";

function App() {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const threshold = 10; // minimum scroll difference to detect direction

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (Math.abs(currentScrollY - lastScrollY) < threshold) return;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }

            setLastScrollY(currentScrollY);
        };

        const onScroll = () => {
            if (!scrolling) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    setScrolling(false);
                });

                setScrolling(true);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [lastScrollY, scrolling]);

    return (
        <>
            <Header isVisible={showHeader} />
            <Home />
            <Outlet />
        </>
    );
}

export default App;
