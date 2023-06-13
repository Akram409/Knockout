import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const usePayment = () => {
    const {user} = useContext(AuthContext); 
    const {data: payment = [], isLoading: paymentloading, refetch} = useQuery({
        queryKey: ['payments'],
        queryFn: async() => {
            const res = await fetch(`https://summer-camp-school-server-dusky.vercel.app/payment/${user?.email}`);
            return res.json()
        }
    })

    return [payment, paymentloading, refetch]
};

export default usePayment;
