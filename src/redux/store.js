import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist';
import { contactsReducer } from "./contacts/contactSlice";
import storage from 'redux-persist/lib/storage';
import filterSlice from "./contacts/filterSlice";
import persistReducer from "redux-persist/es/persistReducer";
import { authReducer } from "./auth/slice";

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
        filter: filterSlice,
    },
});

export const persistor = persistStore(store);