import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useAddAccountMutation } from "../../../handlers/account-handler";
import Swal from "sweetalert2";
import { showAlert } from "../../../utils/alerts";

const StepCard2 = (props) => {
  const { register, handleSubmit } = useForm();
  const info = useSelector((state) => state.loginCred.data);
  const [addAccount] = useAddAccountMutation();

  function handleSubmitComplete(data) {
    try {
      addAccount({
        title: data.title,
        fname: data.fname,
        lname: data.lname,
        gender: data.gender,
        age: data.age,
        newsletter: data.newsletter,
        privacy: data.privacy,
        terms: data.terms,
        email: info.email,
        password: info.password,
      });
      props.handleNext();
    } catch (err) {
      return Swal.fire(showAlert.error(err));
    }
  }

  return (
    <section className="bg-gray-100 w-[400px] h-[500px] font-poppins text-gray-700 rounded-md shadow-md mt-5">
      <p className="w-full text-[18px] font-semibold text-center pb-4 pt-10">
        Account Details
      </p>
      <form onSubmit={handleSubmit(handleSubmitComplete)}>
        <p className="text-left text-[13px] px-10">Title</p>
        <div className="w-full px-10">
          <select
            name="title"
            className="flex justify-start items-center w-[120px] px-1 py-[6px] text-[14px] ring-1 ring-slate-300 outline-none bg-gray-200"
            {...register("title")}
          >
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
            <option value="Mrs.">Mrs.</option>
          </select>
        </div>
        <div className="w-full px-10 pt-3">
          <p className="text-left text-[13px]">Firstname</p>
          <input
            type="text"
            placeholder="Firstname"
            className="bg-gray-200 text-[14px] ring-1 ring-slate-300 outline-none px-2 py-[6px] w-full"
            {...register("fname")}
          />
        </div>
        <div className="w-full px-10 pt-3">
          <p className="text-left text-[13px]">Lastname</p>
          <input
            type="text"
            placeholder="Lastname"
            className="bg-gray-200 text-[14px] ring-1 ring-slate-300 outline-none px-2 py-[6px] w-full"
            {...register("lname")}
          />
        </div>
        <div className="flex justify-between items-center px-10 pt-3">
          <div>
            <p className="text-left text-[13px]">Gender</p>
            <div className="w-full">
              <select
                name="gender"
                className="flex justify-start items-center w-[160px] px-1 py-[6px] text-[14px] ring-1 ring-slate-300 outline-none bg-gray-200"
                {...register("gender")}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div>
            <p className="text-left text-[13px]">Age</p>
            <div className="w-[120px]">
              <input
                type="number"
                className="bg-gray-200 text-[14px] ring-1 ring-slate-300 outline-none px-2 py-[6px] w-full"
                {...register("age")}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-start items-center px-10 pt-4 space-x-1">
          <input
            type="checkbox"
            className="w-[14px] h-[14px]"
            {...register("newsletter")}
          />
          <label className="text-[12px]">I agree to receive newsletter</label>
        </div>
        <div className="flex justify-start items-center pt-1 px-10 space-x-1">
          <input
            type="checkbox"
            className="w-[14px] h-[14px]"
            {...register("terms")}
          />
          <label className="text-[12px]">
            I read and agree to the Terms & Conditions
          </label>
        </div>
        <div className="flex justify-start items-center pt-1 px-10 space-x-1">
          <input
            type="checkbox"
            className="w-[14px] h-[14px]"
            {...register("privacy")}
          />
          <label className="text-[12px]">
            I read and agree to the Privacy Policy
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="px-20 py-2 bg-orange-600 text-white text-[14px] mt-6 rounded"
          >
            Next
          </button>
        </div>
      </form>
    </section>
  );
};

export default StepCard2;
