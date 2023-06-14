import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";

const useManageClass = () => {
    const {loading} = useContext(AuthContext);
    const {data: manageClasses = [], isLoading: loadings, refetch} = useQuery({
        queryKey: ['manageClass'],
        enabled: !loading && !!localStorage.getItem("access-token"),
        queryFn: async() => {
            const res = await fetch('https://summer-camp-school-server-dusky.vercel.app/manageClass');
            return res.json();
        }
    })

    return [manageClasses, loadings, refetch]
};

export default useManageClass;