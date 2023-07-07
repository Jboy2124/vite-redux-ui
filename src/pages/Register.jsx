import React, { useEffect, useState } from "react";
import StepCard1 from "../components/cards/steps/StepCard1";

const Register = () => {
  const [regAuth, setRegAuth] = useState(true);
  const [regAccount, setRegAccount] = useState(false);
  const [complete, setComplete] = useState(false);

  const [selStep1, setSelStep1] = useState(false);
  const [selStep2, setSelStep2] = useState(false);
  const [completeStep, setCompleteStep] = useState(false);

  //Step 1
  const Step1 = () => {
    useEffect(() => {
      setSelStep1(true);
    }, []);
    function handleNextStep1() {
      setRegAuth(false);
      setRegAccount(true);
      setSelStep2(true);
    }

    return (
      <StepCard1 handleNext={handleNextStep1} />
      // <div className="mt-10">
      //   <StepCard1 />
      //   {/* <button
      //     type="button"
      //     className="px-14 py-2 bg-gray-700 text-white"
      //     onClick={(e) => handleNextStep1(e)}
      //   >
      //     Next
      //   </button> */}
      // </div>
    );
  };

  const Step2 = () => {
    function handleBackStep2(e) {
      e.preventDefault();
      setRegAuth(true);
      setRegAccount(false);
      setSelStep2(false);
    }

    function handleNextStep2(e) {
      e.preventDefault();
      setRegAccount(false);
      setComplete(true);
      setCompleteStep(true);
    }

    return (
      <div className="w-[400px] h-[400px] bg-green-400">
        <p>Step 2</p>
        <div className="flex justify-center items-center space-x-5">
          <button
            className="px-14 py-2 bg-gray-700 text-white"
            onClick={(e) => handleBackStep2(e)}
          >
            Back
          </button>
          <button
            className="px-14 py-2 bg-gray-700 text-white"
            onClick={(e) => handleNextStep2(e)}
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  const Step3 = () => {
    return (
      <div className="w-[400px] h-[400px] bg-blue-400">
        <p>Step 3</p>
      </div>
    );
  };
  return (
    <main className="bg-slate-300 font-poppins">
      <section className="min-h-screen flex justify-center items-center">
        <ul className="steps text-blue-700">
          <li
            data-content="1"
            className={`step ${selStep1 ? "step-primary" : "step-neutral"}`}
          >
            <div className={`${regAuth ? "block" : "hidden"}`}>
              <Step1 />
            </div>
          </li>
          <li
            data-content="2"
            className={`step ${selStep2 ? "step-primary" : "step-neutral"}`}
          >
            <div className={`${regAccount ? "block" : "hidden"}`}>
              <Step2 />
            </div>
          </li>
          <li
            data-content="3"
            className={`step ${completeStep ? "step-primary" : "step-neutral"}`}
          >
            <div className={`${complete ? "block" : "hidden"}`}>
              <Step3 />
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Register;
