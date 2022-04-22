import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from './playlist/reducer';

export const store = configureStore({
    reducer: {
        playlist: playlistReducer
    },
})
window.store = store;