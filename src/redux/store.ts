import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit"
import userSlice from "./reducers/userSlice"
import { userApi } from "./services/userService"

const rootReducer = combineReducers({
    user: userSlice,
    [userApi.reducerPath]: userApi.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(userApi.middleware),
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']