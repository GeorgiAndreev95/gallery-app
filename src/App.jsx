import { Outlet } from "react-router";

import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
    return (
        <>
            <Header />
            <Home />
            <Outlet />
        </>
    );
}

export default App;
