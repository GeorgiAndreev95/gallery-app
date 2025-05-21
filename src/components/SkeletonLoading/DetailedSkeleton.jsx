import { motion } from "motion/react";

import classes from "./DetailedSkeleton.module.css";

function DetailedSkeleton() {
    const pulseTransition = {
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut",
        repeatType: "reverse",
    };

    const skeletonTags = Array.from({ length: 6 });
    const tagWidths = [45, 70, 65, 50];

    return (
        <div className={classes.detailedSkeletonContainer}>
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
                className={classes.imageSkeleton}
                animate={{ opacity: [1, 0.4, 1] }}
                transition={pulseTransition}
            />

            <div className={classes.detailsSkeleton}>
                <div className={classes.statsSkeleton}>
                    <motion.div
                        className={classes.value}
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={pulseTransition}
                    />

                    <motion.div
                        className={classes.value}
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={pulseTransition}
                    />

                    <motion.div
                        className={classes.value}
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={pulseTransition}
                    />
                </div>

                <motion.div
                    className={classes.descriptionSkeleton}
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={pulseTransition}
                />

                <div className={classes.moreInfoSkeleton}>
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

                    <div className={classes.tagsSkeleton}>
                        {skeletonTags.map((_, index) => (
                            <motion.div
                                key={index}
                                className={classes.tagSkeleton}
                                animate={{ opacity: [1, 0.4, 1] }}
                                transition={pulseTransition}
                                style={{
                                    width: `${
                                        tagWidths[index % tagWidths.length]
                                    }px`,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailedSkeleton;
