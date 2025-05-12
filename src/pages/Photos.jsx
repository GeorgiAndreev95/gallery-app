import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { getSearchPhotos } from "../services/galleryService";
import { setResultPhotos, setTotalPages } from "../slices/photosSlice";
import Photo from "../components/PhotoComponent/Photo";
import PageSelect from "../components/Footer/PageSelect";
import SkeletonLoading from "../components/SkeletonLoading/SkeletonLoading";

const Photos = React.memo(function Home() {
    const dispatch = useDispatch();
    const { searchTerm } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    const resultPhotos = useSelector((state) => state.photos.resultPhotos);
    const currentPage = useSelector((state) => state.photos.currentPage);

    useEffect(() => {
        const fetchPhotos = async () => {
            setIsLoading(true);
            try {
                const searchPhotos = await getSearchPhotos(
                    searchTerm,
                    currentPage
                );
                console.log(searchPhotos);
                dispatch(setResultPhotos(searchPhotos.results));
                dispatch(setTotalPages(searchPhotos.total_pages));
            } catch (error) {
                console.error("Error fetching photos:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPhotos();
    }, [dispatch, searchTerm, currentPage]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, [searchTerm]);

    useEffect(() => {
        console.log(resultPhotos);
    }, [resultPhotos]);

    return (
        <>
            {resultPhotos.length === 0 && !isLoading && (
                <p
                    style={{
                        fontWeight: "500",
                        textAlign: "center",
                        marginTop: "20px",
                        marginBottom: "20px",
                    }}
                >
                    No results found for "{searchTerm}"
                </p>
            )}
            {isLoading ? (
                <div>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <SkeletonLoading key={index} />
                    ))}
                </div>
            ) : (
                <Photo photos={resultPhotos} />
            )}

            <PageSelect />
        </>
    );
});

export default Photos;
