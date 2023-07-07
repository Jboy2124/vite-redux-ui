import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <main className="bg-slate-300 font-poppins text-gray-700">
      <div className="min-h-screen flex justify-center items-center">
        <div className="flex justify-center items-center divide-x-2 divide-gray-700">
          <span className="px-5 text-[50px] font-semibold">404</span>
          <div className="grid grid-cols-1 place-items-center px-5">
            <span className="text-[25px] font-semibold">Page not found</span>
            <p className="text-[13px]">
              Navigate to{" "}
              <span
                className="text-orange-600 font-semibold cursor-pointer hover:underline underline-offset-4"
                onClick={() => navigate("/signin")}
              >
                homepage.
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
