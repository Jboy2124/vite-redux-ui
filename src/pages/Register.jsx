import React, { useEffect, useState } from "react";
import StepCard1 from "../components/cards/steps/StepCard1";
import StepCard2 from "../components/cards/steps/StepCard2";
import StepCard3 from "../components/cards/steps/StepCard3";

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

    return <StepCard1 handleNext={handleNextStep1} />;
  };

  const Step2 = () => {
    function handleNextStep2() {
      setRegAccount(false);
      setComplete(true);
      setCompleteStep(true);
    }

    return <StepCard2 handleNext={handleNextStep2} />;
  };

  const Step3 = () => {
    return <StepCard3 />;
  };
  return (
    <main className="bg-slate-300 flex flex-col justify-center items-center font-poppins">
      <p className="mt-14 mb-[-70px] text-center text-[22px] font-semibold text-gray-700">Create Account</p>
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
