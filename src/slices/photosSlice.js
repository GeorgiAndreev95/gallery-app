import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listPhotos: [],
    resultPhotos: [],
    resultPhoto: {},
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
        setResultPhoto: (state, action) => {
            state.resultPhoto = action.payload;
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
    setResultPhoto,
    setSearchValue,
    setCurrentPage,
} = photosSlice.actions;

export default photosSlice.reducer;
