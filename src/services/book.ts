import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Books } from '../types/types';
import { useEffect } from 'react';

export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://gutendex.com/' }),
    tagTypes: ['Books'],
    endpoints: (builder) => ({
        getBooks: builder.query<Books, void>({
            query: () => 'books/?page=2',
            providesTags: ['Books'],
        }),
    })
});

export const { useGetBooksQuery } = bookApi;

export const useGetBooksWithAutoRefresh = () => {
    const { data, error, isFetching, refetch } = useGetBooksQuery();

    useEffect(() => {
        const refetchInterval = setInterval(() => {
            refetch();
        }, 600000);

        return () => clearInterval(refetchInterval);
    }, [refetch]);

    return { data, error, isFetching, refetch };
};