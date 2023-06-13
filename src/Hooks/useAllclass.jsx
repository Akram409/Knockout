import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";

const useAllclass = () => {
    const {loading} = useContext(AuthContext);
    const {data: allClasses = [], isLoading: loadings, refetch} = useQuery({
        queryKey: ['allClass'],
        enabled:  !loading && !!localStorage.getItem("access-token"),
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/allClass');
            return res.json();
        }
    })

    return [allClasses, loadings, refetch]
};

export default useAllclass;