import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useEnrollClass = () => {
    const {user,loading} = useContext(AuthContext); 
    const {data: enrollClasses = [], isLoading: loadings, refetch} = useQuery({
        queryKey: ['enrollClass'],
        enabled: !loading && !!localStorage.getItem("access-token"),
        queryFn: async() => {
            const res = await fetch(`https://summer-camp-school-server-dusky.vercel.app/student/enrollClass/${user?.email}`);
            return res.json()
        }
    })

    return [enrollClasses, loadings, refetch]
};

export default useEnrollClass;
