import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUsers,
} from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";
import useInstructors from "../Hooks/useInstructors";
import useStudent from "../Hooks/useStudent";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructors] = useInstructors();
  const [isStudent] = useStudent();
  console.log(isStudent);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side text-white bg-[#0d1122]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full">
          {isAdmin && (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageClass">
                  <FaHome></FaHome> Manage Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUser">
                  <FaUsers></FaUsers> Manage User
                </NavLink>
              </li>
            </>
          )}
          {isInstructors && (
            <>
              <li>
                <NavLink to="/dashboard/myClass">
                  <FaHome></FaHome> My Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrolledStudents">
                  <FaCalendarAlt></FaCalendarAlt> Enrolled Student
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addClass">
                  <FaWallet></FaWallet> Add Class
                </NavLink>
              </li>
            </>
          )}
          {isStudent && (
            <>
              <li>
                <NavLink to="/dashboard/studentHome">
                  <FaHome></FaHome> Student Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/selectedClass">
                  <FaCalendarAlt></FaCalendarAlt> Selected Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrollClass">
                  <FaWallet></FaWallet> Enroll Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <FaShoppingCart></FaShoppingCart> Payment
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaShoppingCart></FaShoppingCart> Payment History
                </NavLink>
              </li>
            </>
          )}

          <div
            className="border-2 flex flex-row items-center  mt-[2rem] whitespace-nowrap
}"
          ></div>

            <div className="absolute bottom-10">
            <li>
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/">Logout</NavLink>
            </li>
            </div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
