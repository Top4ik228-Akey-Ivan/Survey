import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IPictureResponse } from '../../types';

export const pictureApi = createApi({
  reducerPath: 'pictureApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://sirius-draw-test-94500a1b4a2f.herokuapp.com' }),
  endpoints: (build) => ({
    uploadPictures: build.mutation<IPictureResponse, FormData>({
      query: (formData) => ({
        url: '/upload',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const { useUploadPicturesMutation } = pictureApi;
