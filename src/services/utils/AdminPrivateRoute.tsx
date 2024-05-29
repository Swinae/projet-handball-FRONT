import { Outlet, Navigate } from "react-router-dom";

interface PrivateRouteProps {
  userRole:string | undefined
}

export function AdminPrivateRoute({userRole}: PrivateRouteProps) {
  return (userRole === "ADMIN" ? <Outlet /> : <Navigate to="/" />)
}