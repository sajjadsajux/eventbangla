import React from "react";
import { RotateLoader } from "react-spinners";

const Loader = () => {
  return (
    <div>
      <span className="h-screen flex justify-center items-center">
        <RotateLoader color="#6600ff" speedMultiplier={1} />
      </span>
    </div>
  );
};

export default Loader;
