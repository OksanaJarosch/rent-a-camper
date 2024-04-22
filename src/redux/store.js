import { configureStore, combineReducers} from "@reduxjs/toolkit";
import { favoritesReducer } from "./favorites/favoritesSlice";
import { filterReducer } from "./filters/filterSlice";

const rootReducer = combineReducers({
    favorites: favoritesReducer,
    filter: filterReducer,
})

export const store = configureStore({
    reducer: rootReducer,
});