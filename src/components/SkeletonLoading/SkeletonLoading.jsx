import { motion } from "motion/react";
import classes from "./SkeletonLoading.module.css";

function SkeletonLoading() {
    const pulseTransition = {
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut",
        repeatType: "reverse",
    };

    return (
        <div className={classes.skeletonContainer}>
            <div className={classes.authorSkeleton}>
                <motion.div
                    className={classes.authorImage}
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={pulseTransition}
                />
                <motion.div
                    className={classes.authorName}
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={pulseTransition}
                />
            </div>

            <motion.div
                className={classes.skeletonPhoto}
                animate={{ opacity: [1, 0.4, 1] }}
                transition={pulseTransition}
            />
        </div>
    );
}

export default SkeletonLoading;
