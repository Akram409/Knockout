import useAlluser from "../../../../Hooks/useAlluser";
import ManageUserRow from "./ManageUserRow";

const ManageUser = () => {
    const [user] = useAlluser()
    console.log(user)
    return (
        <div className="container mx-auto ">
        <div className="overflow-x-auto w-full">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="text-center font-bold text-black text-sm">
                <th>SL.</th>
                <th>Picture</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Change Role</th>
              </tr>
            </thead>
            <tbody>
              {user.map((item, idx) => (
                <ManageUserRow key={item._id} item={item} index={idx}></ManageUserRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageUser;