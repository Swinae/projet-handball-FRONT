import { Outlet, Navigate } from "react-router-dom";

export function PrivateRoute(userRole: string) {
  return (userRole === "ADMIN" ? <Outlet /> : <Navigate to="/" />)
}