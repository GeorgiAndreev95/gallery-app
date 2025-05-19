import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import Masonry from "react-masonry-css";

import classes from "./UserPhoto.module.css";
import { setResultPhoto } from "../../slices/photosSlice";
import BlurHashImage from "./BlurHashImage";

function UserPhoto({ photos }) {
    const [loadedPhotos, setLoadedPhotos] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(setResultPhoto({}));
        navigate(`/details/${id}`);
    };

    const handleUserClick = (username) => {
        navigate(`/${username}`);
    };

    const breakpointColumnsObj = {
        default: 3,
        992: 2,
        766: 1,
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonryGrid"
            columnClassName="masonryGridColumn"
        >
            {photos.map((photo) => (
                <div key={photo.id} className={classes.userImageContainer}>
                    <div
                        className={classes.mainUserImage}
                        style={{
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <div className={classes.userAuthor}>
                            <img
                                onClick={() =>
                                    handleUserClick(photo.user.username)
                                }
                                srcSet={`
                                ${photo.user.profile_image.small} 32w, 
                                ${photo.user.profile_image.medium} 64w, 
                                ${photo.user.profile_image.large} 128w
                                `}
                                alt={photo.user.name}
                            />
                            <p
                                onClick={() =>
                                    handleUserClick(photo.user.username)
                                }
                            >
                                {photo.user.name}
                            </p>
                        </div>

                        {!loadedPhotos[photo.id] && (
                            <BlurHashImage
                                hash={photo.blur_hash}
                                width={32}
                                height={32}
                            />
                        )}

                        {/* Removed ${photo.urls.full} 1920w for faster loading */}
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
                            onLoad={() =>
                                setLoadedPhotos((prev) => ({
                                    ...prev,
                                    [photo.id]: true,
                                }))
                            }
                            onClick={() => handleClick(photo.id)}
                            style={{
                                inset: 0,
                                opacity: loadedPhotos[photo.id] ? 1 : 0,
                                transition: "opacity 0.4s ease-in-out",
                                zIndex: 2,
                            }}
                        />
                    </div>
                </div>
            ))}
        </Masonry>
    );
}

export default UserPhoto;
