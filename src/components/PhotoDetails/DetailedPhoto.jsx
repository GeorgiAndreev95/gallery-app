import { useState } from "react";

import classes from "./DetailedPhoto.module.css";
import BlurHashImage from "../PhotoComponent/BlurHashImage";

function DetailedPhoto({ photo }) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div
            key={photo.id}
            className={classes.imageContainer}
            style={{
                width: "100%",
                aspectRatio: `${photo.width} / ${photo.height}`,
            }}
        >
            <div className={classes.author}>
                <img
                    src={photo.user.profile_image.small}
                    style={{
                        width: "34px",
                        height: "34px",
                    }}
                />
                <p>{photo.user.name}</p>
            </div>

            <div
                className={classes.mainImage}
                style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
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
                ${photo.urls.full} 1920w
            `}
                    alt={photo.alt_description || "Photo"}
                    onLoad={() => setIsLoaded(true)}
                    style={{
                        width: "100%",
                        height: "100%",
                        inset: 0,
                        opacity: isLoaded ? 1 : 0,
                        transition: "opacity 0.4s ease-in-out",
                        zIndex: 2,
                    }}
                />
            </div>
        </div>
    );
}

export default DetailedPhoto;
