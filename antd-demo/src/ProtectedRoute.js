import { Navigate, Outlet } from 'react-router-dom'


function ProtectedRoute({role}) {
  return (
    role === "admin" ? <Outlet/> : <Navigate to = '/user' />
)
}

export default ProtectedRoute