import { configureStore } from '@reduxjs/toolkit';
import pictureSlice from './slices/pictureSlice';
import { pictureApi } from './services/picturesApi';

export const store = configureStore({
    reducer: {
        [pictureApi.reducerPath]: pictureApi.reducer,
        pictures: pictureSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pictureApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
