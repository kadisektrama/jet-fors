import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../../types/IUser'
import { TUsers } from '../reducers/userSlice'
export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
    endpoints: (builder) => ({
        fetchAllUsers: builder.query<TUsers, {}>({
            query: (args) => `people/?${args}`
        }),
        fetchUser: builder.query<IUser, string>({
            query: (id) => `people/${id}`
        }),
        fetchAllFilms: builder.query<any, any>({
            query: () => `films`
        }),
        fetchAllSpecies: builder.query<any, any>({
            query: () => `species`
        }),
        fetchAllVehicles: builder.query<any, any>({
            query: () => `vehicles`
        }),
        fetchAllStarships: builder.query<any, any>({
            query: () => `starships`
        })
    })
})