import { motion } from "framer-motion";
import classes from "./LoadingSpinner.module.css";

function LoadingSpinner() {
    return (
        <div className={classes.spinnerWrapper}>
            <motion.div
                className={classes.spinner}
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 1,
                }}
            />
        </div>
    );
}

export default LoadingSpinner;
