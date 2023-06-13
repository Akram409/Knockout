import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useAlluser = () => {
    const [axiosSecure] = useAxiosSecure();
    const {loading} = useContext(AuthContext);
    const {data: users = [], isLoading: loadings, refetch} = useQuery({
        queryKey: ['user'],
        enabled: !loading && !!localStorage.getItem("access-token"),
        queryFn: async() => {
            const res = await axiosSecure.get('/user');
            return res.data.data;
        }
    })

    return [users, loadings, refetch]
};

export default useAlluser;