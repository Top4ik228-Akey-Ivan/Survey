import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { surveySliceInitialState } from '../../constants/constants';

export const surveySlice = createSlice({
  name: 'survey',
  initialState: surveySliceInitialState,
  reducers: {
    setTaskId(state, action: PayloadAction<string>) {
      state.task_id = action.payload;
    },
    updateField(state, action: PayloadAction<{ field: string; value: string }>) {
      state.survey[action.payload.field] = action.payload.value;
    },
  }
});

export const { setTaskId, updateField } = surveySlice.actions;
export default surveySlice.reducer;
