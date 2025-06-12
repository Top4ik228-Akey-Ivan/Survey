import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pictureApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://sirius-draw-test-94500a1b4a2f.herokuapp.com' }),
  endpoints: (build) => ({
    uploadPictures: build.mutation<void, FormData>({
      query: (formData) => ({
        url: '/upload',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const { useUploadPicturesMutation } = pictureApi;
