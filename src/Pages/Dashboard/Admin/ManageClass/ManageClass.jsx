
import useManageClass from "../../../../Hooks/useManageClass";
import ManageClassRow from "./ManageClassRow";

const ManageClass = () => {
    const [manageClasses] = useManageClass()
    return (
        <div className="container mx-auto ">
        <div className="overflow-x-auto w-full">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="text-center">
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
                <ManageClassRow key={item._id} item={item} index={idx}></ManageClassRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageClass;