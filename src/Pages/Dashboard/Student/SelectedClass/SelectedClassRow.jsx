import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const SelectedClassRow = ({ item, index, refetch }) => {
    const [axiosSecure] = useAxiosSecure();
  const {
    _id,
    name,
    image,
    instructorName,
    instructorEmail,
    totalSeats,
    price,
    enrolled,
    ClassId
  } = item;

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/student/selectedClass/delete/${_id}`).then((res) => {
            console.log(res)
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
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
      <td>{instructorEmail}</td>
      <td>{totalSeats - enrolled}</td>
      <td>${price}</td>
      <td>
        <div className="flex flex-col gap-y-3">
          <Link to={`/dashboard/payment/${ClassId}`}><button
            className="btn btn-outline btn-success text-white w-full font-bold"
          >
            PAY
          </button></Link>
          <button
            onClick={handleDelete}
            className="btn btn-outline btn-error text-white w-full"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default SelectedClassRow;
