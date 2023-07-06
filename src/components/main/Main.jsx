import React from "react";
import Searchbar from "./Searchbar";
import TableSchedule from "./TableSchedule";

const Main = () => {
  return (
    <main className="w-full bg-slate-100 ring-1 ring-slate-300 shadow-[#4A55A2]">
      <div className="container mx-auto">
        <div className="min-h-[200vh]">
          <div className="w-full px-3 py-3">
            <Searchbar />
          </div>
          <section className="w-full px-3">
            <TableSchedule />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Main;
