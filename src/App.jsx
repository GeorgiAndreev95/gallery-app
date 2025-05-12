import { useState, useEffect } from "react";
import { Outlet, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Photos from "./pages/Photos";
import PhotoDetails from "./pages/PhotoDetails";
import UserProfile from "./pages/UserProfile";

function Layout() {
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
            <Outlet />
        </>
    );
}

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/:username" element={<UserProfile />} />
                <Route path="photos/:searchTerm" element={<Photos />} />
                <Route path="details/:id" element={<PhotoDetails />} />
            </Route>
        </Routes>
    );
}

export default App;
