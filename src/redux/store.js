import { configureStore, combineReducers} from "@reduxjs/toolkit";
import { favoritesReducer } from "./favorites/favoritesSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';


const favPersistConfig = {
    key: 'root',
    storage,
    whitelist: ["favorites"]
};

const rootReducer = combineReducers({
    favorites: favoritesReducer,
});

const persistedRootReducer = persistReducer(favPersistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedRootReducer,
    middleware:
    (getDefaultMiddleware) =>
    getDefaultMiddleware({
    serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    }),
});

export const persistor = persistStore(store);