import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: "filter",
    initialState: {
        location: "",
        equipment: [],
        type: "",
    },
    reducers: {
        updateLocation: (state, action) => {
            state.location = action.payload;
        },
        updateEquipment: (state, action) => {
            state.equipment = action.payload;
        },
        updateType: (state, action) => {
            state.type = action.payload;
        }
    },
});

export const {updateLocation, updateEquipment, updateType} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;