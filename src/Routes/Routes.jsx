import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instructor from "../Pages/Instructor/Instructor";
import Allclass from "../Pages/Allclass/Allclass";
import Dashboard from "../Layouts/Dashboard";
import ManageClass from "../Pages/Dashboard/Admin/ManageClass/ManageClass";
import ManageUser from "../Pages/Dashboard/Admin/ManageUser/ManageUser";
import StudentHome from "../Pages/Dashboard/Student/StudentHome/StudentHome";
import SelectedClass from "../Pages/Dashboard/Student/SelectedClass/SelectedClass";
import EnrollClass from "../Pages/Dashboard/Student/EnrollClass/EnrollClass";
import Payment from "../Pages/Dashboard/Student/Payment/Payment";
import MyClass from "../Pages/Dashboard/Instructor/MyClass/MyClass";
import AddClass from "../Pages/Dashboard/Instructor/AddClass/AddClass";
import PaymentHistory from "../Pages/Dashboard/Student/PaymentHistory/PaymentHistory";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome/AdminHome";
import Footer from "../Pages/Shared/Footer/Footer";
import Error from "../Pages/Shared/Error/Error";
import PrivateRoute from "./Privateroute";
import StudentRoute from "./StudentRoute";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import InstructorHome from "../Pages/Dashboard/Instructor/InstructorHome/InstructorHome";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
      children: [
        {
            path: '/',
            element: <Home />,
            errorElement: <Error />,
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/instructor',
          element: <Instructor />
        },
        {
          path: '/allClass',
          element: <Allclass />
        },
        {
          path: '/footer',
          element: <Footer />
        },
        {
          path: '/error',
          element: <Error />
        },
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        // Student Routes
        {
          path: 'studentHome',
          element: <StudentRoute><StudentHome></StudentHome></StudentRoute>
        },
        {
          path: 'selectedClass',
        element: <StudentRoute><SelectedClass></SelectedClass></StudentRoute>
        },
        {
          path: 'enrollClass',
          element: <StudentRoute><EnrollClass></EnrollClass></StudentRoute>
        },
        {
          path: 'payment/:id',
          element: <StudentRoute><Payment></Payment></StudentRoute>,
        },
        {
          path: 'paymentHistory',
          element: <StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>
        },
        // Instructor Routes
        {
          path: 'instructorHome',
          element: <InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
        },
        {
          path: 'myClass',
          element: <InstructorRoute><MyClass></MyClass></InstructorRoute>
        },
        {
          path: 'addClass',
          element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
        },
        // Admin Routes
        {
          path: 'adminHome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: 'manageClass',
          element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
        },
        {
          path: 'manageUser',
          element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
        },
      ]
    }
  ]);