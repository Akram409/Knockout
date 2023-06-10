import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instructor from "../Pages/Instructor/Instructor";
import Allclass from "../Pages/Allclass/Allclass";
// import Dashboard from "../Layouts/Dashboard";

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
    // {
    //   path: 'dashboard',
    //   element: <Dashboard></Dashboard>,
    //   children: [
    //     {

    //     }
    //   ]
    // }
  ]);