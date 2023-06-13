import { useContext } from "react";

import { AuthContext } from "../../Providers/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import useInstructors from "../../Hooks/useInstructors";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllclassRow = ({ item, index , refetch }) => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const {_id, name, image, instructorName, totalSeats, price } = item;
  const [isAdmin] = useAdmin();
  const [isInstructors] = useInstructors();

  const handleSelect = (data) => {
    data.student_name = user?.displayName
    data.student_email = user?.email
    data.ClassId = _id
    axiosSecure.post("/selectedClass", data).then((data) => {     
      console.log(data)
      if (data.data.insertedId) {
      refetch()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class Selected successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      else
      {
        Swal.fire({
          position: "top-end",
          icon: "warning",
          title: "Class already selected",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
    
  };
  return (
    <tr className="text-center">
      <th>{index + 1}</th>
      <td>
        <div className="flex justify-center items-center">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{instructorName}</td>
      <td>{totalSeats}</td>
      <td>${price}</td>
      <td>
        {user ? (
          isAdmin || isInstructors ? (
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
              Select
            </button>
          ) : (
            <button
              onClick={() => handleSelect(item)}
              className="btn btn-primary text-white"
            >
              Select
            </button>
          )
        ) : (
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
            Select
          </button>
        )}
      </td>
    </tr>
  );
};

export default AllclassRow;
