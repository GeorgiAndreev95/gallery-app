import classes from "./Photo.module.css";

function Photo({ photos }) {
    return photos.map((photo) => (
        <div key={photo.id} className={classes.imageContainer}>
            <div className={classes.author}>
                <img src={photo.user.profile_image.small} />
                <h3>{photo.user.first_name}</h3>
            </div>

            <img src={photo.urls.raw} />
        </div>
    ));
}

export default Photo;
