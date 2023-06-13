import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useInstructors = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {data: isInstructors, isLoading: isInstructorsLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructors/${user?.email}`);
            return res.data.instructors;
        }
    })
    return [isInstructors, isInstructorsLoading]
}
export default useInstructors;