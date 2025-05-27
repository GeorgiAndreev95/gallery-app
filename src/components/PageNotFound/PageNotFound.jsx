import { FaRegFrownOpen } from "react-icons/fa";

import classes from "./PageNotFound.module.css";

function PageNotFound() {
    return (
        <div className={classes.pageNotFound}>
            <div className={classes.container}>
                <FaRegFrownOpen size={30} />
                <h1>404 - Page Not Found</h1>
            </div>

            <p>Oops! The page you're looking for doesn't exist.</p>
        </div>
    );
}

export default PageNotFound;
