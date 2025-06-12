import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Picture {
    id: number;
    url: string;
}

interface PictureState {
    uploadedPictures: Picture[];
}

const initialState: PictureState = {
    uploadedPictures: [],
};

export const pictureSlise = createSlice({
    name: 'images',
    initialState,
    reducers: {
        setPicture(state, action: PayloadAction<Picture>) {
            const existingIndex = state.uploadedPictures.findIndex(p => p.id === action.payload.id);
            if (existingIndex !== -1) {
                // обновляем существующую картинку
                state.uploadedPictures[existingIndex] = action.payload;
            } else {
                // добавляем новую
                state.uploadedPictures.push(action.payload);
            }
        },
    },
});

export const { setPicture } = pictureSlise.actions;
export default pictureSlise.reducer;