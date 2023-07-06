import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#4A55A2] text-white font-poppins">
      <div className="container mx-auto">
        <section className="min-h-[50px] flex justify-between items-center">
          <div className="flex items-center text-[22px] font-semibold">
            <span>travel</span>
            <span className="text-orange-500">organizer</span>
          </div>
          <div>Wutton</div>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
