import { useQuery } from "@tanstack/react-query";

const useAlluser = () => {
    const {data: users = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['user'],
        queryFn: async() => {
            const res = await fetch('https://summer-camp-school-server-dusky.vercel.app/user');
            return res.json();
        }
    })

    return [users, loading, refetch]
};

export default useAlluser;