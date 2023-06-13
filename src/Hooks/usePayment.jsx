import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const usePayment = () => {
    const {user} = useContext(AuthContext); 
    const {data: payment = [], isLoading: paymentloading, refetch} = useQuery({
        queryKey: ['payments'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/payment/${user?.email}`);
            return res.json()
        }
    })

    return [payment, paymentloading, refetch]
};

export default usePayment;
