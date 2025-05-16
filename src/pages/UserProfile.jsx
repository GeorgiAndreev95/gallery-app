import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";

import { getUserPhotos, getUserProfile } from "../services/galleryService";
import SkeletonLoading from "../components/SkeletonLoading/SkeletonLoading";
import UserSkeleton from "../components/SkeletonLoading/UserSkeleton";
import UserBio from "../components/UserBio/UserBio";
import UserPhoto from "../components/PhotoComponent/UserPhoto";
import LoadingSpinner from "../components/SkeletonLoading/LoadingSpinner";

function UserProfile() {
    const { username } = useParams();

    const [user, setUser] = useState(null);
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [initialLoad, setInitialLoad] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    console.log(user);

    const fetchUserPhotos = useCallback(async () => {
        try {
            setIsLoading(true);
            const userPhotosResponse = await getUserPhotos(username, page);
            if (userPhotosResponse.length === 0) {
                setHasMore(false);
            } else {
                setPhotos((prev) => [...prev, ...userPhotosResponse]);
            }
        } catch (err) {
            console.error("Error fetching photos", err);
        } finally {
            setIsLoading(false);
            setInitialLoad(false);
        }
    }, [username, page]);

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
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop + 900 >=
                    document.documentElement.offsetHeight &&
                !isLoading &&
                hasMore
            ) {
                setPage((prev) => prev + 1);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isLoading, hasMore]);

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
                                <UserPhoto photos={photos} />
                                {isLoading && !initialLoad && (
                                    <LoadingSpinner />
                                )}

                                {!hasMore && !isLoading && (
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
                    </div>
                )
            )}
        </>
    );
}

export default UserProfile;
