import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getListPhotos, getSearchPhotos } from "../services/galleryService";
import { setListPhotos, setResultPhotos } from "../slices/photosSlice";
import Photo from "../components/PhotoComponent/Photo";
import PageSelect from "../components/Footer/PageSelect";
import SkeletonLoading from "../components/SkeletonLoading/SkeletonLoading";

const Home = React.memo(function Home() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    const photos = useSelector((state) => state.photos.listPhotos);
    const resultPhotos = useSelector((state) => state.photos.resultPhotos);
    const searchValue = useSelector((state) => state.photos.searchValue);
    const currentPage = useSelector((state) => state.photos.currentPage);

    useEffect(() => {
        const fetchPhotos = async () => {
            setIsLoading(true);
            try {
                if (searchValue.length === 0) {
                    const listPhotos = await getListPhotos(currentPage);
                    dispatch(setListPhotos(listPhotos));
                } else {
                    const searchPhotos = await getSearchPhotos(
                        searchValue,
                        currentPage
                    );
                    dispatch(setResultPhotos(searchPhotos.results));
                }
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

    const photosResponse = searchValue ? resultPhotos : photos;

    useEffect(() => {
        console.log(photosResponse);
    }, [photosResponse]);

    return (
        <>
            {isLoading ? (
                <div>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <SkeletonLoading key={index} />
                    ))}
                </div>
            ) : (
                <Photo photos={photosResponse} />
            )}

            <PageSelect />
        </>
    );
});

export default Home;
