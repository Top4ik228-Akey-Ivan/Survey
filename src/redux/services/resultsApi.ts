import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IResultsResponse } from '../../types';

export const resultsApi = createApi({
  reducerPath: 'resultsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://sirius-draw-test-94500a1b4a2f.herokuapp.com' }),
  endpoints: (build) => ({
    getResults: build.query<IResultsResponse, string>({
      query: (task_id) => ({
        url: `/report/${task_id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetResultsQuery, useLazyGetResultsQuery } = resultsApi;
