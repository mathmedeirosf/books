import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoute() {
    const token = true

    return token ? (<Outlet />) : (<Navigate to='/login' />)
}