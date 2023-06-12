import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useMyClass = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const {
    data: Instructors,
    isLoading: Loading,
    refetch,
  } = useQuery({
    queryKey: ["Instructor"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/myClass/instructor/${user?.email}`);
      return res.data;
    },
  });
  return [Instructors, Loading, refetch];
};
export default useMyClass;
