import { useState } from "react";
import Swal from "sweetalert2";

const ManageUserRow = ({ item, index ,refetch}) => {
  const { _id, name, image, email, position } = item;
  const [adminClick,setadminClick] = useState(position === 'Admin')
  const [instructorClick,setInstructorClick] = useState(position === 'Instructor')
  const handleAdminRole = () => {
    fetch(`https://summer-camp-school-server-dusky.vercel.app/userRole/admin/${_id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        setadminClick(true)
        setInstructorClick(false)
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch()
        }
      });
  };
const handleInstructorRole = () => {
    fetch(`https://summer-camp-school-server-dusky.vercel.app/userRole/instructor/${_id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        setadminClick(false)
        setInstructorClick(true)
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} is an Instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch()
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
      <td>{email}</td>
      <td>{position}</td>
      <td>
        <div className="flex flex-col gap-y-3">
          <button
            onClick={handleAdminRole}
            className="btn btn-outline btn-success text-white w-full font-bold"
            disabled={adminClick}
          >
            Admin
          </button>
          <button
            onClick={handleInstructorRole}
            className="btn btn-outline btn-warning text-white w-full"
            disabled={instructorClick}
          >
            Instructor
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ManageUserRow;
