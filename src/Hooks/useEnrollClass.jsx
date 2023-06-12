import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useEnrollClass = () => {
    const {user} = useContext(AuthContext); 
    const {data: enrollClasses = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['enrollClass'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/student/enrollClass/${user?.email}`);
            return res.json()
        }
    })

    return [enrollClasses, loading, refetch]
};

export default useEnrollClass;
