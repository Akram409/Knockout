import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Loading from "../Pages/Shared/Loading/Loading";
import useStudent from "../Hooks/useStudent";

const StudentRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isStudent, isStudentLoading] = useStudent();
    const location = useLocation();

    if(loading || isStudentLoading){
        return <Loading />
    }

    if (user && isStudent) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default StudentRoute;