import React, { useEffect } from "react";
import { BsAt, BsFillUnlockFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { signinAuth } from "../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "../utils/alerts";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { styles } from "../utils/styles/styles";

const Auth = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userAuth.user);

  function handleUserLogin(data) {
    if (!data.email || !data.password)
      return Swal.fire(showAlert.error("All fields are requried!"));

    dispatch(signinAuth(data));
  }

  useEffect(() => {
    if (user[0]?.token === undefined) {
      if (user.error) Swal.fire(showAlert.error(user.error));
    } else {
      setTimeout(() => {
        navigate("/dashboard");
      }, 200);
    }
  }, [handleUserLogin]);

  return (
    <main className="bg-slate-300 font-poppins">
      <div className="min-h-screen flex justify-center items-center">
        <section className="w-[400px] h-[500px] bg-gradient-to-br from-slate-200 from-60% to-[#4A55A2] rounded-md shadow-2xl">
          <div className="w-full py-2 px-2 text-[17px] font-semibold">
            <span className="text-[#4A55A2]">travel</span>
            <span className="text-orange-500">organizer</span>
          </div>
          <p className="text-[20px] text-center mt-12 font-semibold">LOGIN</p>
          <p className="text-[13px] text-center">
            Please enter your email & password
          </p>
          <form onSubmit={handleSubmit(handleUserLogin)}>
            <div className="w-full mt-12 px-12 py-2">
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  className="peer w-full border-b-2 text-[13px] placeholder-transparent border-gray-400 outline-none bg-transparent py-2"
                  {...register("email")}
                />
                <label htmlFor="email" className={`absolute ${styles.label}`}>
                  Email address
                </label>
              </div>
            </div>

            <div className="w-full px-12 py-[5px] mt-5">
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="peer w-full border-b-2 text-[13px] placeholder-transparent border-gray-400 outline-none bg-transparent py-2"
                  {...register("password")}
                />
                <label
                  htmlFor="password"
                  className={`absolute ${styles.label}`}
                >
                  Password
                </label>
              </div>
            </div>
            <div className="w-full mt-16 text-center">
              <button
                type="submit"
                className="text-white text-[15px] bg-orange-600 px-16 py-2 rounded active:scale-95 duration-300"
                // onClick={(e) => handleUserLogin(e)}
              >
                Signin
              </button>
            </div>
            <p className="text-center text-[13px] mt-4">
              You don't have an account yet?{" "}
              <span
                className="underline underline-offset-4 font-semibold cursor-pointer hover:text-orange-500 duration-300"
                onClick={() => navigate("/register")}
              >
                Signup
              </span>{" "}
              here.
            </p>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Auth;
