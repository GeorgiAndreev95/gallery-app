import Masonry from "react-masonry-css";
import { motion } from "motion/react";
import classes from "./SkeletonLoading.module.css";

function SkeletonLoading() {
    const pulseTransition = {
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut",
        repeatType: "reverse",
    };

    const skeletonItems = Array.from({ length: 12 });
    const photoHeights = [500, 530, 600, 300, 260];

    const breakpointColumnsObj = {
        default: 3,
        992: 2,
        766: 1,
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className={classes.skeletonMasonryGrid}
            columnClassName={classes.skeletonMasonryColumn}
        >
            {skeletonItems.map((_, index) => (
                <div key={index} className={classes.skeletonCard}>
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
                        style={{
                            height: `${
                                photoHeights[index % photoHeights.length]
                            }px`,
                        }}
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={pulseTransition}
                    />
                </div>
            ))}
        </Masonry>
    );
}

export default SkeletonLoading;
