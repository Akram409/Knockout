import { useQuery } from "@tanstack/react-query";

const useManageClass = () => {
    const {data: manageClasses = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['manageClass'],
        queryFn: async() => {
            const res = await fetch('https://summer-camp-school-server-dusky.vercel.app/manageClass');
            return res.json();
        }
    })

    return [manageClasses, loading, refetch]
};

export default useManageClass;