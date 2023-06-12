import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useSelectedClass = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {data: selectedClass, isLoading: Loading,refetch} = useQuery({
        queryKey: ['selectedClasses'],
        queryFn: async () => {
            const res = await axiosSecure(`/student/selectedClass/${user?.email}`);
            return res.data;
        }
    })
    return [selectedClass, Loading,refetch]
}
export default useSelectedClass;
