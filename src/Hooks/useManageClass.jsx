import { useQuery } from "@tanstack/react-query";

const useManageClass = () => {
    const {data: manageClasses = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['manageClass'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/manageClass');
            return res.json();
        }
    })

    return [manageClasses, loading, refetch]
};

export default useManageClass;