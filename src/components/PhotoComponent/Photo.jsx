import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import classes from "./Photo.module.css";
import BlurHashImage from "./BlurHashImage";
import { setResultPhoto } from "../../slices/photosSlice";

function Photo({ photos }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(setResultPhoto({}));
        navigate(`/details/${id}`);
    };

    const handleUserClick = (username) => {
        navigate(`/${username}`);
    };

    return (
        <div className={classes.bodyWrapper}>
            {photos.map((photo) => (
                <div
                    key={photo.id}
                    className={classes.imageContainer}
                    style={{
                        aspectRatio: `${photo.width} / ${photo.height}`,
                    }}
                >
                    <div
                        className={classes.mainImage}
                        style={{
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <div className={classes.author}>
                            <img
                                onClick={() =>
                                    handleUserClick(photo.user.username)
                                }
                                srcSet={`
                                ${photo.user.profile_image.small} 32w, 
                                ${photo.user.profile_image.medium} 64w, 
                                ${photo.user.profile_image.large} 128w
                                `}
                            />
                            <p
                                onClick={() =>
                                    handleUserClick(photo.user.username)
                                }
                            >
                                {photo.user.name}
                            </p>
                        </div>

                        {!isLoaded && (
                            <BlurHashImage
                                hash={photo.blur_hash}
                                width={32}
                                height={32}
                            />
                        )}
                        <img
                            srcSet={`
                                ${photo.urls.thumb} 200w,
                                ${photo.urls.small} 400w,
                                ${photo.urls.regular} 1080w,
                                `}
                            sizes="(max-width: 767px) 100vw,
                                    (min-width: 768px) 50vw,
                                    100vw"
                            alt={photo.alt_description || "Photo"}
                            onLoad={() => setIsLoaded(true)}
                            style={{
                                inset: 0,
                                opacity: isLoaded ? 1 : 0,
                                transition: "opacity 0.4s ease-in-out",
                                zIndex: 2,
                            }}
                            onClick={() => handleClick(photo.id)}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Photo;
