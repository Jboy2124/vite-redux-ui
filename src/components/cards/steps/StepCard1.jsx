import React from "react";
import { useForm } from "react-hook-form";

const StepCard1 = (props) => {
  const { register, handleSubmit, reset } = useForm();

  function handleSubmitForm(data) {
    props.handleNext();
  }

  return (
    <section className="bg-gray-100 w-[400px] h-[500px] font-poppins text-gray-700 rounded-md shadow-md mt-5">
      <p className="w-full text-[18px] font-semibold text-center py-10">
        Login Credentials
      </p>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <p className="text-left text-[15px] px-10">Email</p>
        <div className="w-full px-10">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="example@email.com"
            className="bg-gray-200 text-[14px] ring-1 ring-slate-300 outline-none px-2 py-[6px] w-full"
          />
        </div>
        <p className="text-left text-[15px] px-10 mt-4">Password</p>
        <div className="w-full px-10">
          <input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            className="bg-gray-200 text-[14px] ring-1 ring-slate-300 outline-none px-2 py-[6px] w-full"
          />
        </div>
        <p className="text-left text-[15px] px-10 mt-4">Confirm password</p>
        <div className="w-full px-10">
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            placeholder="password"
            className="bg-gray-200 text-[14px] ring-1 ring-slate-300 outline-none px-2 py-[6px] w-full"
          />
        </div>
        <div className="mt-16">
          <button
            type="submit"
            className="px-20 py-2 text-[14px] text-white bg-orange-600"
          >
            Next
          </button>
        </div>
      </form>
    </section>
  );
};

export default StepCard1;
