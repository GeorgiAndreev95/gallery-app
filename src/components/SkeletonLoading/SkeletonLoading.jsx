import classes from "./SkeletonLoading.module.css";

function SkeletonLoading() {
    return (
        <div className={classes.skeletonContainer}>
            <div className={classes.authorSkeleton}>
                <p className={classes.authorImage} />
                <p className={classes.authorName}></p>
            </div>

            <p className={classes.skeletonPhoto} />
        </div>
    );
}

export default SkeletonLoading;
