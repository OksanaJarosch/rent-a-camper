import { configureStore, combineReducers} from "@reduxjs/toolkit";
import { favoritesReducer } from "./favorites/favoritesSlice";

const rootReducer = combineReducers({
    favorites: favoritesReducer,
})

export const store = configureStore({
    reducer: rootReducer,
});