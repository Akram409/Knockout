import { Link } from "react-router-dom";


const ManageClassRow = ({ item, index }) => {
    console.log(item)
    const { name, image, instructorName,instructorEmail, totalSeats, price,status ,enrolled} = item;
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
        <td>{instructorEmail}</td>
        <td>{totalSeats-enrolled}</td>
        <td>${price}</td>
        <td>
          <div className="flex flex-col gap-y-3">
          <Link to="/">
              <button className="btn btn-outline btn-success text-white w-full font-bold">Approved</button>
            </Link>
          <Link to="/">
              <button className="btn btn-outline btn-warning text-white w-full">Pending</button>
            </Link>
          <Link to="/">
              <button className="btn btn-outline btn-error text-white w-full">Denied</button>
            </Link>
          </div>
        </td>
      </tr>
    );
};

export default ManageClassRow;