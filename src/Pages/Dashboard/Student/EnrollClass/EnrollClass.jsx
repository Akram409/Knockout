import { Helmet } from "react-helmet-async";
import useEnrollClass from "../../../../Hooks/useEnrollClass";
import EnrollClassRow from "./EnrollClassRow";

const EnrollClass = () => {
    const [enrollClasses,,refetch] = useEnrollClass()
    console.log(enrollClasses)
    return (
        <>
        <Helmet>
          <title>Enrolled Class | KnockOut</title>
        </Helmet>
          <div className="container mx-auto">
          <div className="overflow-x-auto w-full">
            <table className="table table-zebra w-full">
              <thead>
                <tr className="text-center font-bold text-black text-sm">
                  <th>SL.</th>
                  <th>Picture</th>
                  <th>ClassName</th>
                  <th>Instructor</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {enrollClasses.map((item, idx) => (
                  <EnrollClassRow key={item._id} item={item} refetch={refetch} index={idx}></EnrollClassRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </>
    );
};

export default EnrollClass;