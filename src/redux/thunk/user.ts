import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import { IUser } from "../../types/IUser"
//'https://swapi.dev/api/people'
export const fetchUsers = createAsyncThunk(
    'users/fetchAll',
    async (path: string, fetchAPI) => {
        try {
            const response = await axios.get<IUser[]>(path)
            return response.data
        } catch (e: any) {
            return fetchAPI.rejectWithValue(e.message)
        }
    }
)

export const fetchUser = createAsyncThunk(
    'user/fetchAll',
    async (id: string, fetchAPI) => {
        try {
            const response = await axios.get<IUser[]>(`https://swapi.dev/api/people/${id}`)
            return response.data
        } catch (e: any) {
            return fetchAPI.rejectWithValue(e.message)
        }
    }
)