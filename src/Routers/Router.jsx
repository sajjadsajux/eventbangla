import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import Home from "../Components/Home/Home";
import About from "../Pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/eventbangla.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <h2>Login</h2>,
      },
      {
        path: "/register",
        element: <h2>Register</h2>,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPages></ErrorPages>,
  },
]);

export default router;
