import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { MdPhoto } from "react-icons/md";
import {
    FaGlobeAmericas,
    FaInstagram,
    FaCheckCircle,
    FaHeart,
    FaLink,
} from "react-icons/fa";

import {
    setCurrentPage,
    setResultPhotos,
    setSelected,
} from "../../slices/photosSlice";
import classes from "./UserBio.module.css";

function UserBio({ user }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selected = useSelector((state) => state.photos.selected);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const { instagram_username, twitter_username, portfolio_url } = user.social;
    const hasSocialLinks =
        instagram_username || twitter_username || portfolio_url;
    const {
        profile_image,
        first_name,
        name,
        username,
        bio,
        for_hire,
        location,
        tags,
        total_photos,
        total_likes,
    } = user;

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 2000);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleTagClick = (tag) => {
        dispatch(setCurrentPage(1));
        dispatch(setResultPhotos([]));
        navigate(`/photos/${tag}`);
    };

    const handlePhotosClick = () => {
        dispatch(setSelected("User Photos"));
    };

    const handleLikedClick = () => {
        dispatch(setSelected("Likes"));
    };

    const toggleDropdown = () => {
        setShowDropdown((prev) => !prev);
    };

    return (
        <>
            <div className={classes.userProfile}>
                <div className={classes.userInfo}>
                    <div className={classes.imgWrapper}>
                        <img
                            className={classes.profileImage}
                            src={profile_image.large}
                            alt={name}
                            onLoad={() => setIsLoaded(true)}
                            style={{
                                inset: 0,
                                opacity: isLoaded ? 1 : 0,
                                background: "#e7e7e7",
                                transition: "opacity 0.4s ease-in-out",
                                zIndex: 2,
                            }}
                        />
                    </div>

                    <div className={classes.infoContainer}>
                        <h2>{name}</h2>
                        <p className={classes.username}>@{username}</p>
                        {bio && <p className={classes.bio}>{bio}</p>}

                        <div className={classes.additionalInfo}>
                            {for_hire === true && (
                                <div className={classes.forHire}>
                                    <span className={classes.icon}>
                                        <FaCheckCircle
                                            size={16}
                                            color="#007fff"
                                        />
                                        <span className={classes.forHiteText}>
                                            Available for hire
                                        </span>
                                    </span>

                                    <p></p>
                                </div>
                            )}
                            {location && (
                                <div className={classes.infoContainer}>
                                    <span className={classes.infoIcon}>
                                        <FaLocationDot
                                            size={16}
                                            color="#767676"
                                        />
                                        <span className={classes.infoText}>
                                            {location}
                                        </span>
                                    </span>
                                </div>
                            )}

                            {hasSocialLinks && (
                                <div className={classes.dropdownWrapper}>
                                    <button
                                        className={classes.infoWrapper}
                                        onClick={toggleDropdown}
                                    >
                                        <span className={classes.infoIcon}>
                                            <FaLink size={16} color="#767676" />
                                            <span className={classes.infoText}>
                                                {`Connect with ${first_name} ⯆`}
                                            </span>
                                        </span>
                                    </button>

                                    <AnimatePresence>
                                        {showDropdown && (
                                            <motion.div
                                                className={classes.dropdownMenu}
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.8,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    scale: 0.8,
                                                }}
                                                transition={{
                                                    duration: 0.1,
                                                    ease: "easeInOut",
                                                }}
                                            >
                                                <ul>
                                                    {portfolio_url && (
                                                        <li>
                                                            <FaGlobeAmericas
                                                                size={16}
                                                                color="#767676"
                                                                style={{
                                                                    marginRight:
                                                                        "8px",
                                                                }}
                                                            />
                                                            <a
                                                                href="http://toaheftiba.co.uk/"
                                                                target="_blank"
                                                            >
                                                                {portfolio_url}
                                                            </a>
                                                        </li>
                                                    )}
                                                    {instagram_username && (
                                                        <li>
                                                            <FaInstagram
                                                                size={16}
                                                                color="#767676"
                                                                style={{
                                                                    marginRight:
                                                                        "8px",
                                                                }}
                                                            />
                                                            <a
                                                                href={`https://www.instagram.com/${instagram_username}`}
                                                                target="_blank"
                                                            >
                                                                Instagram
                                                            </a>
                                                        </li>
                                                    )}
                                                    {twitter_username && (
                                                        <li>
                                                            <FaXTwitter
                                                                size={16}
                                                                color="#767676"
                                                                style={{
                                                                    marginRight:
                                                                        "8px",
                                                                }}
                                                            />
                                                            <a
                                                                href={`https://www.x.com/${twitter_username}`}
                                                                target="_blank"
                                                            >
                                                                Twitter
                                                            </a>
                                                        </li>
                                                    )}
                                                </ul>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )}
                        </div>

                        {tags.custom.length > 0 && (
                            <div className={classes.interests}>
                                <p>Interests</p>
                                <div className={classes.tags}>
                                    {tags.custom.map((tag, index) => (
                                        <button
                                            key={index}
                                            className={classes.tagButton}
                                            onClick={() =>
                                                handleTagClick(tag.title)
                                            }
                                        >
                                            {tag.title}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {showScrollTop && (
                    <motion.div
                        className={classes.scrollTopWrapper}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                    >
                        <button
                            className={classes.scrollTopButton}
                            onClick={scrollToTop}
                        >
                            ▲<span className={classes.tooltip}>To top</span>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className={classes.userPhotos}>
                <div>
                    <button
                        onClick={handlePhotosClick}
                        className={
                            selected === "User Photos"
                                ? `${classes.tabButton} ${classes.tabButtonActive}`
                                : classes.tabButton
                        }
                    >
                        <MdPhoto
                            size={22}
                            className={
                                selected === "User Photos"
                                    ? `${classes.tabIcon} ${classes.tabIconActive}`
                                    : classes.tabIcon
                            }
                        />{" "}
                        Photos {`(${total_photos})`}
                    </button>
                    {selected === "User Photos" && (
                        <motion.div
                            layoutId="tab-indicator"
                            className={classes.activeTabIndicator}
                        />
                    )}
                </div>
                <div>
                    <button
                        onClick={handleLikedClick}
                        className={
                            selected === "Likes"
                                ? `${classes.tabButton} ${classes.tabButtonActive}`
                                : classes.tabButton
                        }
                    >
                        <FaHeart
                            size={22}
                            className={
                                selected === "Likes"
                                    ? `${classes.tabIcon} ${classes.tabIconActive}`
                                    : classes.tabIcon
                            }
                        />{" "}
                        Likes {`(${total_likes})`}
                    </button>
                    {selected === "Likes" && (
                        <motion.div
                            layoutId="tab-indicator"
                            className={classes.activeTabIndicator}
                        />
                    )}
                </div>
            </div>
        </>
    );
}

export default UserBio;
