import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { setCurrentPage, setResultPhotos } from "../../slices/photosSlice";
import classes from "./UserBio.module.css";

function UserBio({ user }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleTagClick = (tag) => {
        dispatch(setCurrentPage(1));
        dispatch(setResultPhotos([]));
        navigate(`/photos/${tag}`);
    };

    return (
        <>
            <div className={classes.userProfile}>
                <div className={classes.userInfo}>
                    <img
                        className={classes.profileImage}
                        src={user.profile_image.large}
                        alt={user.name}
                    />
                    <h2>{user.name}</h2>
                    <p className={classes.username}>@{user.username}</p>
                    {user.bio && <p className={classes.bio}>{user.bio}</p>}

                    <div>
                        {user.for_hire === true && (
                            <div className={classes.forHire}>
                                <span className={classes.icon}>
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
                                                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                                            ></path>{" "}
                                        </g>
                                    </svg>
                                    <span className={classes.forHiteText}>
                                        Available for hire
                                    </span>
                                </span>

                                <p></p>
                            </div>
                        )}
                        {user.location && (
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
                                        {user.location}
                                    </span>
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                <div className={classes.interests}>
                    <p>Interests</p>
                    <div className={classes.tags}>
                        {user.tags.custom.map((tag, index) => (
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

            <div className={classes.userPhotos}>
                <p>User Photos {`(${user.total_photos})`}</p>
            </div>
        </>
    );
}

export default UserBio;
