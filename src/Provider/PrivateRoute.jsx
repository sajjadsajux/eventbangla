import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import { HashLoader, PacmanLoader, RingLoader, RotateLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return (
      <span className="h-screen flex justify-center items-center">
        <RotateLoader color="#6600ff" speedMultiplier={1} />
      </span>
    );
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
