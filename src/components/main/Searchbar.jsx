import React from "react";
import { BsSearch } from 'react-icons/bs'

const Searchbar = () => {
  return (
    <section className="w-full bg-white font-poppins text-gray-800 ring-1 ring-gray-300">
      <div className="min-h-[50px] flex justify-between items-center shadow-sm px-5">
        <span className="font-semibold text-[18px]">Schedules</span>
        <div className=" w-[350px] ring-1 ring-gray-300">
          <div className="bg-gray-20 flex justify-start items-center">
            <input
              type="text"
              placeholder="search..."
              className="w-full bg-gray-200 py-[6px] px-3 text-[13px] outline-none"
            />
            <span className="px-3 py-[7px] text-gray-600"><BsSearch size={18}  /></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Searchbar;
