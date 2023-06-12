import { Link } from "react-router-dom";

const InstructorRow = ({ item, index }) => {
    // const { name, image,email,biography, experience,skills,message, position,classesTaken } = item;
    const { name, image,email,classesTaken  } = item;
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
      <td>{classesTaken}</td>
      <td>
        <Link to="/"><button className="btn btn-warning text-black">See Classes</button></Link>
      </td>
    </tr>
    );
};

export default InstructorRow;