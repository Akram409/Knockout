import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";

const useInstructor = () => {
  const {loading} = useContext(AuthContext);
  const {
    data: instructors = [],
    isLoading: loadings,
    refetch,
  } = useQuery({
    queryKey: ["instructor"],
    enabled: !loading && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await fetch("https://summer-camp-school-server-dusky.vercel.app/instructor");
      return res.json();
    },
  });

  return [instructors, loadings, refetch];
};

export default useInstructor;
