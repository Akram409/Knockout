import { Navigate, useLocation } from "react-router";
import useInstructors from "../Hooks/useInstructors";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Loading from "../Pages/Shared/Loading/Loading";



const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isInstructors, isInstructorsLoading] = useInstructors();
    const location = useLocation();

    if(loading || isInstructorsLoading){
        return <Loading />
    }

    if (user && isInstructors) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;