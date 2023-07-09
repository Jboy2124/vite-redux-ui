import React from "react";

const AccountInfoCard = (props) => {
  return (
    <section className="w-[250px] h-[200px] bg-white shadow-2xl">
      <p className="w-full my-1">{props.title}</p>
      <p className="w-full my-1">{props.fname}</p>
      <p className="w-full my-1">{props.lname}</p>
    </section>
  );
};

export default AccountInfoCard;
