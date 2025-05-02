import classes from "./Photo.module.css";

function Photo({ photos }) {
    return photos.map((photo) => (
        <div key={photo.id} className={classes.imageContainer}>
            <div className={classes.author}>
                <img src={photo.user.profile_image.small} />
                <p>{photo.user.name}</p>
            </div>

            <img src={photo.urls.raw} />
        </div>
    ));
}

export default Photo;
