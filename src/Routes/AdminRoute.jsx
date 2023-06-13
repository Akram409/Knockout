import { Navigate, useLocation } from "react-router";
import useAdmin from "../Hooks/useAdmin";
import Loading from "../Pages/Shared/Loading/Loading";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <Loading />
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;