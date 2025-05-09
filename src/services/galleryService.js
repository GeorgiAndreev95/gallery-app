import axiosInstance from "../axiosInstance";

export const getListPhotos = async (page) => {
    try {
        const { data } = await axiosInstance.get(
            `/photos?page=${page}&per_page=20`
        );

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getSearchPhotos = async (query, page) => {
    try {
        const { data } = await axiosInstance.get(
            `/search/photos?page=${page}&per_page=20&query=${query}`
        );

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getSinglePhoto = async (id) => {
    try {
        const { data } = await axiosInstance.get(`/photos/${id}`);

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
