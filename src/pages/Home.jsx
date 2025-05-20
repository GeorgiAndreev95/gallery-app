import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getListPhotos } from "../services/galleryService";
import { setListPhotos } from "../slices/photosSlice";
import Photo from "../components/PhotoComponent/Photo";
import PageSelect from "../components/Footer/PageSelect";
import SkeletonLoading from "../components/SkeletonLoading/SkeletonLoading";

const Home = React.memo(function Home() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    const photos = useSelector((state) => state.photos.listPhotos);
    const searchValue = useSelector((state) => state.photos.searchValue);
    const currentPage = useSelector((state) => state.photos.currentPage);

    useEffect(() => {
        const fetchPhotos = async () => {
            setIsLoading(true);
            try {
                const listPhotos = await getListPhotos(currentPage);
                dispatch(setListPhotos(listPhotos));
            } catch (error) {
                console.error("Error fetching photos:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPhotos();
    }, [dispatch, searchValue, currentPage]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, [searchValue]);

    useEffect(() => {
        console.log(photos);
    }, [photos]);

    return (
        <>
            {isLoading && !photos ? (
                <SkeletonLoading />
            ) : (
                <Photo photos={photos} />
            )}

            <PageSelect />
        </>
    );
});

export default Home;
