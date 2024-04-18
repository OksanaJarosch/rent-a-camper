import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState: [],
    reducers: {
        addFavorite: (state, action) => {
            state.push(action.payload);
        },
        deleteFavorite: (state, action) => {
            return state.filter(camp => camp._id !== action.payload);
        }
    }
});

export const {addFavorite, deleteFavorite} = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;