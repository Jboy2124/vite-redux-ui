import React from "react";
import { useNavigate } from "react-router-dom";

const StepCard3 = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-100  font-poppins text-gray-700 rounded-md shadow-md mt-5">
      <div className="w-[400px] h-[500px] flex flex-col justify-center items-center">
        <p className="px-10 text-center text-[30px]">
          You have successfully created an account.
        </p>
        <button
          className="px-20 py-2 text-white text-[14px] bg-orange-600 mt-10 rounded"
          onClick={() => navigate("/")}
        >
          Complete
        </button>
      </div>
    </section>
  );
};

export default StepCard3;
