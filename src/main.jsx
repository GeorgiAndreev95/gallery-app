import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import "./index.css";
import App from "./App.jsx";
import store from "./store.js";
import { Provider } from "react-redux";
import "./i18n.js";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
