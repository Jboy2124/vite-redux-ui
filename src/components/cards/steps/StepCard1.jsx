import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { showAlert } from "../../../utils/alerts";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../slices/signupCredSlice";
import { verifyEmail } from "../../../slices/emailVerificationSlice";

const StepCard1 = (props) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const exist = useSelector((state) => state.emailVerify.existing);

  function handleSubmitForm(data) {
    if (!data.email || !data.password || !data.retypePassword)
      return Swal.fire(showAlert.error("All fields are required!"));

    if (data.password !== data.retypePassword)
      return Swal.fire(showAlert.error("Password did not match!"));

    // dispatch(verifyEmail({ email: data.email }));
    dispatch(getData(data));

    props.handleNext();
  }

  // useEffect(() => {
  //   console.log("exist: ", exist);
  // }, [handleSubmitForm]);

  return (
    <section className="bg-gray-100 w-[400px] h-[500px] font-poppins text-gray-700 rounded-md shadow-md mt-5">
      <p className="w-full text-[18px] font-semibold text-center py-10">
        Login Credentials
      </p>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <p className="text-left text-[13px] px-10 mt-3">Email</p>
        <div className="w-full px-10">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="example@email.com"
            className="bg-gray-200 text-[14px] ring-1 ring-slate-300 outline-none px-2 py-[6px] w-full"
            {...register("email")}
          />
        </div>
        <p className="text-left text-[13px] px-10 mt-5">Password</p>
        <div className="w-full px-10">
          <input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            className="bg-gray-200 text-[14px] ring-1 ring-slate-300 outline-none px-2 py-[6px] w-full"
            {...register("password")}
          />
        </div>
        <p className="text-left text-[13px] px-10 mt-5">Confirm password</p>
        <div className="w-full px-10">
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            placeholder="password"
            className="bg-gray-200 text-[14px] ring-1 ring-slate-300 outline-none px-2 py-[6px] w-full"
            {...register("retypePassword")}
          />
        </div>
        <div className="mt-16">
          <button
            type="submit"
            className="px-20 py-2 text-[14px] text-white bg-orange-600 rounded"
          >
            Next
          </button>
        </div>
      </form>
    </section>
  );
};

export default StepCard1;
