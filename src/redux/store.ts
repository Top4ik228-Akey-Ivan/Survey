import { configureStore } from '@reduxjs/toolkit';
import pictureSlice from './slices/pictureSlice';
import { pictureApi } from './services/picturesApi';
import { surveyApi } from './services/surveyApi';
import surveySlice  from './slices/surveySlice';
import { resultsApi } from './services/resultsApi';

export const store = configureStore({
    reducer: {
        [pictureApi.reducerPath]: pictureApi.reducer,
        [surveyApi.reducerPath]: surveyApi.reducer,
        [resultsApi.reducerPath]: resultsApi.reducer,
        pictures: pictureSlice,
        survey: surveySlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            pictureApi.middleware, 
            surveyApi.middleware, 
            resultsApi.middleware
        )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
