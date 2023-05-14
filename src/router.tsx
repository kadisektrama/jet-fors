import React, { lazy } from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'

// Layouts
import Layout from './components/layout/layout'

// Basic
const Users = lazy(() => import('./components/users/users'))
const User = lazy(() => import('./components/user/user'))


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            <Route path="/" element={<Users />} />
            <Route path="/users/:id" element={<User />} />
        </Route>
    )
)

const routerContainer = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default routerContainer