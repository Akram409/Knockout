import { Helmet } from "react-helmet-async";
import useMyClass from "../../../../Hooks/useMyClass";
import MyClassRow from "./MyClassRow";

const MyClass = () => {
  const [Instructors, , refetch] = useMyClass()
  console.log(Instructors)
  return (
    <>
      <Helmet>
        <title>MyClass | KnockOut</title>
      </Helmet>
      <div className="container mx-auto">
        <div className="overflow-x-auto w-full">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="text-center font-bold text-black text-sm">
                <th>SL.</th>
                <th>Picture</th>
                <th>ClassName</th>
                <th>Price</th>
                <th>Enrolled</th>
                <th>Status</th>
                <th>Feedback</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {/* {Instructor?.map((item, idx) => (
                <MyClassRow key={item._id} item={item} refetch={refetch} index={idx}></MyClassRow>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyClass;
