import React from "react";

const PageButton = ({ number }) => {
  return (
    <button className="w-7 h-8 px-1 rounded bg-orange-600 text-white flex justify-center items-center">
      {number}
    </button>
  );
};

export default PageButton;
