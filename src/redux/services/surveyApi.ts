import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ISurveyUpload } from '../../types';

export const surveyApi = createApi({
  reducerPath: 'surveyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://sirius-draw-test-94500a1b4a2f.herokuapp.com' }),
  endpoints: (build) => ({
    uploadSurvey: build.mutation<void, ISurveyUpload>({
      query: (data) => ({
        url: '/submit-survey',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useUploadSurveyMutation } = surveyApi;
