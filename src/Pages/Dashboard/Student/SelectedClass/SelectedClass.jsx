import useSelectedClass from "../../../../Hooks/useSelectedClass";
import { Helmet } from "react-helmet-async";
import SelectedClassRow from "./SelectedClassRow";

const SelectedClass = () => {
    const [selectedClass,,refetch] = useSelectedClass()
    return (
        <>
        <Helmet>
          <title>Selected Class | KnockOut</title>
        </Helmet>
        <h2 className="text-3xl text-center font-bold mb-5">Selected Class</h2>
          <div className="container mx-auto">
          <div className="overflow-x-auto w-full">
            <table className="table table-zebra w-full">
              <thead>
                <tr className="text-center font-bold text-black text-sm">
                  <th>SL.</th>
                  <th>Picture</th>
                  <th>ClassName</th>
                  <th>Instructor</th>
                  <th>Email</th>
                  <th>Available Seat</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {selectedClass?.map((item, idx) => (
                  <SelectedClassRow key={item._id} item={item} refetch={refetch} index={idx}></SelectedClassRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </>
    );
};

export default SelectedClass;