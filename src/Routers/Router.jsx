import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import Home from "../Components/Home/Home";
import About from "../Pages/About/About";
import EventDetails from "../Components/EventDetails/EventDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ForgetPassword from "../Pages/ForgetPass/ForgetPassword";
import PrivateRoute from "../Provider/PrivateRoute";
import Profile from "../Pages/Profile/Profile";
import Terms from "../Pages/Terms/Terms";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import Faq from "../Pages/Faq/Faq";
import Contact from "../Pages/Contact/Contact";

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
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/terms-and-conditions",
        element: <Terms></Terms>,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/faqs",
        element: <Faq></Faq>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/event/:id",
        element: (
          <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/eventbangla.json"),
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPages></ErrorPages>,
  },
]);

export default router;
