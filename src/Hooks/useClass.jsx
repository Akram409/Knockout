import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";

const useClass = () => {
    const {loading} = useContext(AuthContext);
    const {data: classes = [], isLoading: loadings, refetch} = useQuery({
        queryKey: ['class'],
        enabled: !loading && !!localStorage.getItem("access-token"),
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/class');
            return res.json();
        }
    })

    return [classes, loadings, refetch]
};

export default useClass;