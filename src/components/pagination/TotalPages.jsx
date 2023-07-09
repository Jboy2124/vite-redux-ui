import React from "react";
import PageButton from "../cards/pages/PageButton";

const TotalPages = (props) => {
  const total = 10;
  let content = [];

  for (let i = 0; i < total; i++) {
    content.push(i);
  }

  return (
    <section className="w-full min-h-[50px] bg-green-200 flex justify-center items-center">
      <div className="flex justify-center items-center space-x-2">
        <button className=" px-2 h-8 rounded bg-orange-600 text-white">
          Prev
        </button>
        {content.map((items) => {
          return <PageButton key={items} number={items + 1} />;
        })}

        <button className=" px-2 h-8 rounded bg-orange-600 text-white">
          Next
        </button>
      </div>
    </section>
  );
};

export default TotalPages;
