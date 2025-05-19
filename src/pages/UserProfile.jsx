import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import {
    getUserLikedPhotos,
    getUserPhotos,
    getUserProfile,
} from "../services/galleryService";
import SkeletonLoading from "../components/SkeletonLoading/SkeletonLoading";
import UserSkeleton from "../components/SkeletonLoading/UserSkeleton";
import UserBio from "../components/UserBio/UserBio";
import UserPhoto from "../components/PhotoComponent/UserPhoto";
import LoadingSpinner from "../components/SkeletonLoading/LoadingSpinner";

function UserProfile() {
    const { username } = useParams();

    const [user, setUser] = useState(null);
    const [photos, setPhotos] = useState([]);
    const [likedPhotos, setLikedPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLikedLoading, setIsLikedLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [likedPage, setLikedPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [likedHasMore, setLikedHasMore] = useState(true);
    const [initialLoad, setInitialLoad] = useState(true);

    const selected = useSelector((state) => state.photos.selected);
    const displayedPhotos = selected === "User Photos" ? photos : likedPhotos;

    console.log(user);

    const fetchUserPhotos = useCallback(async () => {
        try {
            setIsLoading(true);
            const userPhotosResponse = await getUserPhotos(username, page);
            if (userPhotosResponse.length < 20) {
                setHasMore(false);
            }
            setPhotos((prev) => [...prev, ...userPhotosResponse]);
        } catch (err) {
            console.error("Error fetching photos", err);
        } finally {
            setIsLoading(false);
            setInitialLoad(false);
        }
    }, [username, page]);

    const fetchUserLikedPhotos = useCallback(async () => {
        try {
            setIsLikedLoading(true);
            const likedPhotosResponse = await getUserLikedPhotos(
                username,
                likedPage
            );
            if (likedPhotosResponse.length < 20) {
                setLikedHasMore(false);
            }
            setLikedPhotos((prev) => [...prev, ...likedPhotosResponse]);
        } catch (err) {
            console.error("Error fetching liked photos", err);
        } finally {
            setIsLikedLoading(false);
        }
    }, [username, likedPage]);

    useEffect(() => {
        const fetchUserData = async () => {
            const userResponse = await getUserProfile(username);
            setUser(userResponse);
        };
        fetchUserData();
    }, [username]);

    useEffect(() => {
        fetchUserPhotos();
    }, [fetchUserPhotos]);

    useEffect(() => {
        fetchUserLikedPhotos();
    }, [fetchUserLikedPhotos]);

    console.log(likedPhotos);

    useEffect(() => {
        const handleScroll = () => {
            const nearBottom =
                window.innerHeight +
                    document.documentElement.scrollTop +
                    1500 >=
                document.documentElement.offsetHeight;

            if (!nearBottom) return;

            if (selected === "User Photos" && !isLoading && hasMore) {
                setPage((prev) => prev + 1);
            }

            if (
                selected === "Liked Photos" &&
                !isLikedLoading &&
                likedHasMore
            ) {
                setLikedPage((prev) => prev + 1);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [selected, isLoading, hasMore, isLikedLoading, likedHasMore]);

    return (
        <>
            {initialLoad && !user ? (
                <UserSkeleton />
            ) : (
                user && (
                    <div>
                        <UserBio user={user} />
                        {initialLoad ? (
                            <div>
                                {Array.from({ length: 10 }).map((_, index) => (
                                    <SkeletonLoading key={index} />
                                ))}
                            </div>
                        ) : (
                            <>
                                {displayedPhotos.length === 0 &&
                                !isLoading &&
                                !isLikedLoading ? (
                                    <p
                                        style={{
                                            fontWeight: "500",
                                            textAlign: "center",
                                            marginTop: "20px",
                                            marginBottom: "20px",
                                        }}
                                    >
                                        {selected === "User Photos"
                                            ? "This user hasn't uploaded any photos yet."
                                            : "This user hasn't liked any photos yet."}
                                    </p>
                                ) : (
                                    <>
                                        <UserPhoto photos={displayedPhotos} />
                                        {(isLoading || isLikedLoading) &&
                                            !initialLoad && <LoadingSpinner />}

                                        {((selected === "User Photos" &&
                                            !hasMore &&
                                            !isLoading) ||
                                            (selected === "Likes" &&
                                                !likedHasMore &&
                                                !isLikedLoading)) && (
                                            <p
                                                style={{
                                                    fontWeight: "500",
                                                    textAlign: "center",
                                                    marginTop: "20px",
                                                    marginBottom: "20px",
                                                }}
                                            >
                                                No more photos
                                            </p>
                                        )}
                                    </>
                                )}
                            </>
                        )}
                    </div>
                )
            )}
        </>
    );
}

export default UserProfile;
