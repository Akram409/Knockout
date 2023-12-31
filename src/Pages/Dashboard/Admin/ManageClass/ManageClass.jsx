
import { Helmet } from "react-helmet-async";
import useManageClass from "../../../../Hooks/useManageClass";
import ManageClassRow from "./ManageClassRow";

const ManageClass = () => {
  const [manageClasses,,refetch] = useManageClass()
    return (
      <>
      <Helmet>
        <title>ManageClass | KnockOut</title>
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
                <th>Email</th>
                <th>Available Seat</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {manageClasses.map((item, idx) => (
                <ManageClassRow key={item._id} item={item} refetch={refetch} index={idx}></ManageClassRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </>
    );
};

export default ManageClass;