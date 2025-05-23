import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listPhotos: [],
    resultPhotos: [],
    resultPhoto: {},
    currentPage: 1,
    totalPages: 500,
    selected: "User Photos",
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
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        },
        setSelected: (state, action) => {
            state.selected = action.payload;
        },
    },
});

export const {
    setListPhotos,
    setResultPhotos,
    setResultPhoto,
    setCurrentPage,
    setTotalPages,
    setSelected,
} = photosSlice.actions;

export default photosSlice.reducer;
