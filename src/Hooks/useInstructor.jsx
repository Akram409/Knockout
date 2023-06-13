import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
  const {
    data: instructors = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["instructor"],
    queryFn: async () => {
      const res = await fetch("https://summer-camp-school-server-dusky.vercel.app/instructor");
      return res.json();
    },
  });

  return [instructors, loading, refetch];
};

export default useInstructor;
