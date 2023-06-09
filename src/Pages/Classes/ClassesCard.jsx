import { GiTeacher } from "react-icons/gi";
import { MdEventSeat, MdOutlineAttachMoney } from "react-icons/md";

const ClassesCard = ({ item }) => {
  const { name, image, instructorName, totalSeats, price } = item;
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
            <span className="text-xl font-bold">Total Seats: {totalSeats}</span>
          </div>
          <div className="flex gap-2 items-center justify-start">
            <MdOutlineAttachMoney size="2em" color="green" />
            <span className="text-xl font-bold">Price: ${price}</span>
          </div>
          <div className="card-actions justify-center pt-2">
            <button className="btn btn-primary text-white">View Details</button>
          </div>
        </div>
      </div>
  );
};

export default ClassesCard;
