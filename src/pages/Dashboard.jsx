import React from "react";
import Navbar from "../components/navbar/Navbar";
import SideMenu from "../components/side-menu/SideMenu";
import { useSelector } from "react-redux";
import { displaySelector } from "../utils/dashboard-selector";

const Dashboard = () => {
  const displayValue = useSelector((state) => state.displayComp.display);

  return (
    <>
      <header className="sticky top-0 z-10">
        <Navbar />
      </header>
      <main className="container mx-auto flex space-x-4">
        <div className="">
          <SideMenu />
        </div>
        <div className="w-full">{displaySelector(displayValue)}</div>
      </main>
    </>
  );
};

export default Dashboard;
