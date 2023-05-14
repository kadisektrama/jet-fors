import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/IUser";
import { fetchUser, fetchUsers } from "../thunk/user";

export type TUsers = {
    count: number,
    results: IUser[],
}

type TInitialState = {
    error: string,
    loading: boolean,
    users: TUsers | null,
    user: IUser | null,
}

const initialState: TInitialState = {
    error: '',
    loading: false,
    users: null,
    user: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<TUsers>) => {
            state.loading = false;
            state.error = '';
            state.users = action.payload;
        },
        [fetchUsers.pending.type]: (state) => {
            state.loading = true;
            state.error = '';
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload
        },
        [fetchUser.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.loading = false;
            state.error = '';
            state.user = action.payload;
        },
        [fetchUser.pending.type]: (state) => {
            state.loading = true;
            state.error = '';
        },
        [fetchUser.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload
        },
    }
})

export default userSlice.reducer