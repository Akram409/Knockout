import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useEnrollClass = () => {
    const {user} = useContext(AuthContext); 
    const {data: enrollClasses = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['enrollClass'],
        queryFn: async() => {
            const res = await fetch(`https://summer-camp-school-server-dusky.vercel.app/student/enrollClass/${user?.email}`);
            return res.json()
        }
    })

    return [enrollClasses, loading, refetch]
};

export default useEnrollClass;
