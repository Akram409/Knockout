import { GiTeacher } from "react-icons/gi";
import { MdEventSeat, MdOutlineAttachMoney } from "react-icons/md";
import useAdmin from "../../Hooks/useAdmin";
import useInstructors from "../../Hooks/useInstructors";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ClassesCard = ({ item,refetch }) => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { _id,name, image, instructorName, totalSeats, price ,enrolled} = item;
  const [isAdmin] = useAdmin();
  const [isInstructors] = useInstructors();
  const isClassFull = enrolled >= totalSeats;

  const handleSelect = (data) => {
    data.student_name = user?.displayName;
    data.student_email = user?.email;
    data.ClassId = _id;
    axiosSecure.post("/selectedClass", data).then((data) => {
      console.log(data);
      if (data.data.insertedId) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class Selected successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
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
      <div className="card max-h-fit mx-3 bg-[#13182a] shadow-2xl text-center">
        <figure className="img-fluid w-full">
          <img src={image} className="w-full h-72" alt="Image Alt" />
        </figure>
        <div className="card-body mx-auto text-white ">
          <h2 className="text-2xl font-bold pb-1">{name}</h2>
          <div className="flex gap-2 items-center justify-start">
            <GiTeacher size="2em" color="red" />
            <span className="text-xl font-bold">
              {instructorName}
            </span>
          </div>
          <div className="flex gap-2 items-center justify-start">
            <MdEventSeat size="2em" color="blue" />
            <span className="text-xl font-bold">Total Seats: {totalSeats-enrolled}</span>
          </div>
          <div className="flex gap-2 items-center justify-start">
            <MdOutlineAttachMoney size="2em" color="green" />
            <span className="text-xl font-bold">Price: ${price}</span>
          </div>
          <div className="card-actions justify-center pt-2">
          {user ? (
          isAdmin || isInstructors ? (
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
              Enroll
            </button>
          ) : (
            <button
              onClick={() => handleSelect(item)}
              className={`btn btn-primary text-white ${
                isClassFull ? "cursor-not-allowed opacity-50 text-white" : ""
              }`}
              disabled={isClassFull}
            >
              {isClassFull ? "Class Full" : "Enroll"}
            </button>
          )
        ) : (
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
            Enroll
          </button>
        )}
          </div>
        </div>
      </div>
  );
};

export default ClassesCard;
