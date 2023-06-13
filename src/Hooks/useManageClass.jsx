import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";

const useManageClass = () => {
    const {loading} = useContext(AuthContext);
    const {data: manageClasses = [], isLoading: loadings, refetch} = useQuery({
        queryKey: ['manageClass'],
        enabled: !loading && !!localStorage.getItem("access-token"),
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/manageClass');
            return res.json();
        }
    })

    return [manageClasses, loadings, refetch]
};

export default useManageClass;