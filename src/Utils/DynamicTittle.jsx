import React, { useEffect } from "react";

const DynamicTittle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default DynamicTittle;
