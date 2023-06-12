import useAllclass from "../../Hooks/useAllclass";
import AllclassRow from "./AllclassRow";

const Allclass = () => {
    const [allClasses,,refetch] = useAllclass()
    return (
        <div className="container mx-auto pt-28">
        <div className="overflow-x-auto w-full">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="text-center">
                <th>SL.</th>
                <th>Picture</th>
                <th>ClassName</th>
                <th>Instructor</th>
                <th>Available Seat</th>
                <th>Price</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {allClasses.map((item, idx) => (
                <AllclassRow key={item._id} item={item} refetch={refetch} index={idx}></AllclassRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Allclass;