import Swal from "sweetalert2";
import useAlluser from "../../../../Hooks/useAlluser";

const ManageUserRow = ({ item, index }) => {
  const [refetch] = useAlluser()

  const { _id, name, image, email, position } = item;
  console.log(position)
  const handleAdminRole = () => {
    fetch(`http://localhost:5000/userRole/admin/${_id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
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
    fetch(`http://localhost:5000/userRole/instructor/${_id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
          >
            Admin
          </button>
          <button
            onClick={handleInstructorRole}
            className="btn btn-outline btn-warning text-white w-full"
          >
            Instructor
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ManageUserRow;
