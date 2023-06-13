import { useQuery } from "@tanstack/react-query";

const useAllclass = () => {
    const {data: allClasses = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['allClass'],
        queryFn: async() => {
            const res = await fetch('https://summer-camp-school-server-dusky.vercel.app/allClass');
            return res.json();
        }
    })

    return [allClasses, loading, refetch]
};

export default useAllclass;