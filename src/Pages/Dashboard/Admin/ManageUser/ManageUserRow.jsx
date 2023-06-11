import { Link } from "react-router-dom";

const ManageUserRow = ({ item, index }) => {
  const { name, image, email, position } = item;

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
          <Link to="/">
            <button className="btn btn-outline btn-success text-white w-full font-bold">
              Admin
            </button>
          </Link>
          <Link to="/">
            <button className="btn btn-outline btn-warning text-white w-full">
              Instructor
            </button>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default ManageUserRow;
