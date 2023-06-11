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
import EnrolledStudents from "../Pages/Dashboard/Instructor/EnrolledStudent/EnrolledStudents";
import AddClass from "../Pages/Dashboard/Instructor/AddClass/AddClass";
import PaymentHistory from "../Pages/Dashboard/Student/PaymentHistory/PaymentHistory";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: '/',
            element: <Home />
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
      ]
    },
    {
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        // Student Routes
        {
          path: 'studentHome',
          element: <StudentHome></StudentHome>
        },
        {
          path: 'selectedClass',
          element: <SelectedClass></SelectedClass>
        },
        {
          path: 'enrollClass',
          element: <EnrollClass></EnrollClass>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },
        // Instructor Routes
        {
          path: 'myClass',
          element: <MyClass></MyClass>
        },
        {
          path: 'enrolledStudents',
          element: <EnrolledStudents></EnrolledStudents>
        },
        {
          path: 'addClass',
          element: <AddClass></AddClass>
        },
        // Admin Routes
        {
          path: 'adminHome',
          element: <ManageClass></ManageClass>
        },
        {
          path: 'manageClass',
          element: <ManageClass></ManageClass>
        },
        {
          path: 'manageUser',
          element: <ManageUser></ManageUser>
        },
      ]
    }
  ]);