import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getListPhotos, getSearchPhotos } from "../services/galleryService";
import {
    setCurrentPage,
    setListPhotos,
    setResultPhotos,
} from "../slices/photosSlice";
import Photo from "../components/PhotoComponent/Photo";
import PageSelect from "../components/Footer/PageSelect";
import SkeletonLoading from "../components/SkeletonLoading/SkeletonLoading";

const Home = React.memo(function Home() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

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
            } finally {
                setIsLoading(false);
            }
        };

        fetchPhotos();
    }, [dispatch, searchValue, currentPage]);

    useEffect(() => {
        dispatch(setCurrentPage(1));
        window.scrollTo({
            top: 0,
        });
    }, [searchValue, dispatch]);

    // console.log(photos);
    console.log(resultPhotos);

    const photosResponse = searchValue ? resultPhotos : photos;

    return (
        <>
            {isLoading ? (
                photosResponse.map((photo) => (
                    <SkeletonLoading key={photo.id} />
                ))
            ) : (
                <Photo photos={photosResponse} />
            )}
            <PageSelect />
        </>
    );
});

export default Home;
