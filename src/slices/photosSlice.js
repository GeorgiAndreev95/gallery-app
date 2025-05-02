import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listPhotos: [],
    resultPhotos: [],
    searchValue: "",
    currentPage: 1,
};

export const photosSlice = createSlice({
    name: "photos",
    initialState,
    reducers: {
        setListPhotos: (state, action) => {
            state.listPhotos = action.payload;
        },
        setResultPhotos: (state, action) => {
            state.resultPhotos = action.payload;
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
});

export const {
    setListPhotos,
    setResultPhotos,
    setSearchValue,
    setCurrentPage,
} = photosSlice.actions;

export default photosSlice.reducer;
