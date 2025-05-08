import { useState } from "react";

import classes from "./Photo.module.css";
import BlurHashImage from "./BlurHashImage";

function Photo({ photos }) {
    const [isLoaded, setIsLoaded] = useState(false);

    return photos.map((photo) => (
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
                    sizes="(max-width: 480px) 100vw, 
                   (max-width: 768px) 80vw, 
                   (max-width: 1200px) 60vw, 
                   1200px"
                    alt={photo.alt_description || "Photo"}
                    onLoad={() => setIsLoaded(true)}
                    style={{
                        width: "100%",
                        height: "100%",
                        // objectFit: "cover",
                        // position: "absolute",
                        inset: 0,
                        opacity: isLoaded ? 1 : 0,
                        transition: "opacity 0.4s ease-in-out",
                        zIndex: 2,
                    }}
                />
            </div>
        </div>
    ));
}

export default Photo;
