import { NavLink, Outlet } from "react-router-dom";
import {
  FaWallet,
  FaHome,
} from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
import { FcHome } from "react-icons/fc";
import { MdOutlineClass } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { SiGoogleclassroom } from "react-icons/si";
import { BsDatabaseAdd } from "react-icons/bs";
import { BiSelectMultiple } from "react-icons/bi";
import { AiOutlineHistory } from "react-icons/ai";
import useAdmin from "../Hooks/useAdmin";
import useInstructors from "../Hooks/useInstructors";
import useStudent from "../Hooks/useStudent";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";

const Dashboard = () => {
  const { logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructors] = useInstructors();
  const [isStudent] = useStudent();

  const handleLogOut = () => {
    logOut();
  };
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
                  <FaHome size="1.5em" /> <h1 className="text-xl font-bold">Admin Home</h1>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageClass">
                  <MdOutlineClass size="1.5em"/> <h1 className="text-xl font-bold">Manage Class</h1>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUser">
                  <HiOutlineUserGroup size="1.5em"/> <h1 className="text-xl font-bold">Manage User</h1>
                </NavLink>
              </li>
            </>
          )}
          {isInstructors && (
            <>
              <li>
                <NavLink to="/dashboard/instructorHome">
                  <FaHome  size="1.5em"/><h1 className="text-xl font-bold">Instructor Home</h1>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myClass">
                  <SiGoogleclassroom  size="1.5em"/><h1 className="text-xl font-bold">My Class</h1>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addClass">
                  <BsDatabaseAdd size="1.5em"/> <h1 className="text-xl font-bold">Add Class</h1>
                </NavLink>
              </li>
            </>
          )}
          {isStudent && (
            <>
              <li>
                <NavLink to="/dashboard/studentHome">
                <FaHome size="1.5em" /><h1 className="text-xl font-bold">Student Home</h1>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/selectedClass">
                  <BiSelectMultiple size="1.5em"/> <h1 className="text-xl font-bold">Selected Class</h1>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrollClass">
                  <FaWallet size="1.5em"></FaWallet> <h1 className="text-xl font-bold">Enroll Class</h1>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <AiOutlineHistory style={{color:"whitesmoke"}} size="1.5em"/> <h1 className="text-xl font-bold">Payment History</h1>
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
                <FcHome size="1.5em"/> <h1 className="text-xl font-bold">Home</h1>
              </NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={handleLogOut}>
                <CgLogOut size="1.5em"/>
                <h1 className="text-xl font-bold">Logout</h1>
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
