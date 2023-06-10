import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import useInstructors from "../../Hooks/useInstructors";

const AllclassRow = ({ item, index }) => {
  const { user } = useContext(AuthContext);
  const { name, image, instructorName, totalSeats, price } = item;
  const [isAdmin] = useAdmin();
  const [isInstructors] = useInstructors();

  console.log(isAdmin , isInstructors)
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
            <Link to="/">
              <button className="btn btn-primary text-white">Select</button>
            </Link>
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
