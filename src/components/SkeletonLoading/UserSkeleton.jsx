import { motion } from "motion/react";
import classes from "./UserSkeleton.module.css";

function UserSkeleton() {
    const pulseTransition = {
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut",
        repeatType: "reverse",
    };

    return (
        <div className={classes.userProfile}>
            <div className={classes.imgSkeleton}>
                <motion.div
                    className={classes.profileImage}
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={pulseTransition}
                />
            </div>

            <div className={classes.infoSkeleton}>
                <motion.h2
                    className={classes.userFullName}
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={pulseTransition}
                />
                <motion.div
                    className={classes.username}
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={pulseTransition}
                />
                <motion.div
                    className={classes.bio}
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={pulseTransition}
                />

                <div className={classes.additionalInfo}>
                    <motion.div
                        className={classes.info}
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={pulseTransition}
                    />
                    <motion.div
                        className={classes.info}
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={pulseTransition}
                    />
                    <motion.div
                        className={classes.info}
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={pulseTransition}
                    />
                </div>

                <div className={classes.interests}>
                    <motion.div
                        className={classes.interestsLable}
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={pulseTransition}
                    />
                    <div className={classes.tags}>
                        {Array.from({ length: 4 }).map((tag, index) => (
                            <motion.div
                                key={index}
                                className={classes.tagButton}
                                animate={{ opacity: [1, 0.4, 1] }}
                                transition={pulseTransition}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserSkeleton;
