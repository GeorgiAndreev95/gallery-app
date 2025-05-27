import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import classes from "./DetailedPhoto.module.css";
import BlurHashImage from "../PhotoComponent/BlurHashImage";
import { setCurrentPage, setResultPhotos } from "../../slices/photosSlice";

function DetailedPhoto({ photo }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const descriptionRef = useRef(null);
    const [isClamped, setIsClamped] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const formattedDate = new Date(photo.created_at).toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "long",
            day: "numeric",
        }
    );

    const handleTagClick = (tag) => {
        dispatch(setCurrentPage(1));
        dispatch(setResultPhotos([]));
        navigate(`/photos/${tag}`);
    };

    const handleUserClick = (username) => {
        navigate(`/users/${username}`);
    };

    const toggleModal = () => {
        setShowModal((prev) => !prev);
    };

    useEffect(() => {
        if (descriptionRef.current) {
            const lineHeight = parseFloat(
                getComputedStyle(descriptionRef.current).lineHeight
            );
            const maxLines = 2;
            const maxHeight = lineHeight * maxLines;
            if (descriptionRef.current.scrollHeight > maxHeight) {
                setIsClamped(true);
            }
        }
    }, [photo.description]);

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showModal]);

    return (
        <div
            className={classes.detailedImageContainer}
            style={{
                width: "100%",
                aspectRatio: `${photo.width} / ${photo.height}`,
            }}
        >
            <div className={classes.author}>
                <img
                    onClick={() => handleUserClick(photo.user.username)}
                    src={photo.user.profile_image.small}
                    style={{
                        width: "34px",
                        height: "34px",
                    }}
                />
                <p onClick={() => handleUserClick(photo.user.username)}>
                    {photo.user.name}
                </p>
            </div>

            <div
                className={classes.mainDetailedImage}
                style={{
                    position: "relative",
                    overflow: "hidden",
                    aspectRatio: `${photo.width} / ${photo.height}`,
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
                    onClick={toggleModal}
                    style={{
                        width: "100%",
                        height: "auto",
                        inset: 0,
                        opacity: isLoaded ? 1 : 0,
                        transition: "opacity 0.4s ease-in-out",
                        zIndex: 2,
                        cursor: "zoom-in",
                    }}
                />
            </div>

            <div className={classes.details}>
                <div className={classes.viewsContainer}>
                    <div className={classes.views}>
                        <h3>Views</h3>
                        <span className={classes.numbers}>{photo.views}</span>
                    </div>
                    <div className={classes.likes}>
                        <h3>Likes</h3>
                        <span className={classes.numbers}>{photo.likes}</span>
                    </div>
                    <div className={classes.downloads}>
                        <h3>Downloads</h3>
                        <span className={classes.numbers}>
                            {photo.downloads}
                        </span>
                    </div>
                </div>

                <div className={classes.descriptionContainer}>
                    <div
                        ref={descriptionRef}
                        className={`${classes.description} ${
                            !showMore ? classes.clamp : ""
                        }`}
                    >
                        <p>{photo.description}</p>
                    </div>
                    {photo.description && isClamped && (
                        <button
                            className={classes.toggleButton}
                            onClick={() => setShowMore((prev) => !prev)}
                        >
                            {showMore ? "Show less" : "Show more"}
                            <svg
                                className={`${classes.arrowIcon} ${
                                    showMore ? classes.arrowUp : ""
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                width="14"
                                height="14"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 14a1 1 0 01-.7-.3l-5-5a1 1 0 011.4-1.4L10 11.58l4.3-4.3a1 1 0 011.4 1.42l-5 5a1 1 0 01-.7.3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    )}
                </div>

                <div className={classes.moreInfo}>
                    {photo.location.name && (
                        <div className={classes.infoContainer}>
                            <span className={classes.infoIcon}>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g
                                        id="SVGRepo_bgCarrier"
                                        strokeWidth="0"
                                    ></g>
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7.37584 4.85915C8.65549 3.61971 10.1969 3 12 3C13.8031 3 15.3372 3.61267 16.6023 4.83803C17.8675 6.06339 18.5 7.54929 18.5 9.29577C18.5 10.169 18.2746 11.169 17.8238 12.2958C17.373 13.4225 16.8277 14.4789 16.1879 15.4648C15.5481 16.4507 14.9156 17.3732 14.2903 18.2324C13.665 19.0916 13.1342 19.7746 12.698 20.2817L12 21C11.8255 20.8028 11.5928 20.5423 11.302 20.2183C11.0112 19.8944 10.4877 19.2465 9.73154 18.2746C8.97539 17.3028 8.31376 16.3592 7.74664 15.4437C7.17953 14.5282 6.66331 13.493 6.19799 12.338C5.73266 11.1831 5.5 10.169 5.5 9.29577C5.5 7.54929 6.12527 6.07043 7.37584 4.85915Z"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>{" "}
                                        <path
                                            d="M13 9.5C13 10.0523 12.5523 10.5 12 10.5C11.4477 10.5 11 10.0523 11 9.5C11 8.94772 11.4477 8.5 12 8.5C12.5523 8.5 13 8.94772 13 9.5Z"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>{" "}
                                    </g>
                                </svg>
                                <span className={classes.infoText}>
                                    {photo.location.name}
                                </span>
                            </span>
                        </div>
                    )}
                    {photo.created_at && (
                        <div className={classes.infoContainer}>
                            <span className={classes.infoIcon}>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g
                                        id="SVGRepo_bgCarrier"
                                        strokeWidth="0"
                                    ></g>
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                            d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>{" "}
                                    </g>
                                </svg>
                                <span className={classes.infoText}>
                                    {formattedDate}
                                </span>
                            </span>
                        </div>
                    )}
                    {photo.exif.name && (
                        <div className={classes.infoContainer}>
                            <span className={classes.infoIcon}>
                                <svg
                                    fill="#767676"
                                    viewBox="0 0 32 32"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g
                                        id="SVGRepo_bgCarrier"
                                        strokeWidth="0"
                                    ></g>
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path d="M29 7h-4.599l-2.401-4h-12l-2.4 4h-4.6c-1 0-3 1-3 2.969v16.031c0 1.657 1.5 3 2.792 3h26.271c1.313 0 2.938-1.406 2.938-2.968v-16.032c0-1-1-3-3-3zM30 26.032c0 0.395-0.639 0.947-0.937 0.969h-26.265c-0.232-0.019-0.797-0.47-0.797-1v-16.031c0-0.634 0.851-0.953 1-0.969h5.732l2.4-4h9.802l1.785 3.030 0.55 0.97h5.731c0.705 0 0.99 0.921 1 1v16.032zM16 10c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zM16 22c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>{" "}
                                    </g>
                                </svg>
                                <span className={classes.infoText}>
                                    {photo.exif.name}
                                </span>
                            </span>
                        </div>
                    )}

                    <div className={classes.tags}>
                        {photo.tags.map((tag, index) => (
                            <button
                                key={index}
                                className={classes.tagButton}
                                onClick={() => handleTagClick(tag.title)}
                            >
                                {tag.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {showModal && (
                <div className={classes.modalOverlay} onClick={toggleModal}>
                    <img
                        src={photo.urls.raw}
                        alt={photo.alt_description || "Full size photo"}
                        className={classes.modalImage}
                    />
                </div>
            )}
        </div>
    );
}

export default DetailedPhoto;
