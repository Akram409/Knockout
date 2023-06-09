import useInstructor from "../../Hooks/useInstructor";
import InstructorRow from "./InstructorRow";

const Instructor = () => {
    const [instructors] = useInstructor()
  return (
    <div className="container mx-auto pt-28">
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-center">
              <th>SL.</th>
              <th>Picture</th>
              <th>Instructor</th>
              <th>Email</th>
              <th>ClassTaken</th>
              <th>ClassName</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((item, idx) => (
              <InstructorRow key={item._id} item={item} index={idx}></InstructorRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Instructor;
