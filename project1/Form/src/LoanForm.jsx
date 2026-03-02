import Modal from "./Modal";
import { useState } from "react";
import MyComponent from "./MyComponent";
import { LoanInputContext } from "./Context/loanFormInputContext";
import { useContext } from "react";
import { userContext } from "./Context/userContext";

export default function LoanForm() {
  const userData = useContext(userContext);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });
  function handleFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    const { age, phoneNumber } = loanInputs;
    if (age < 18 || age > 100) {
      setErrorMessage("The age is not allowed");
    } else if (phoneNumber.length < 10) {
      setErrorMessage("Phone number format is incorrect");
    }
    setShowModal(true);
  }
  const btnIsDisabled =
    loanInputs.name == "" ||
    loanInputs.age == "" ||
    loanInputs.phoneNumber == "" ||
    loanInputs.salaryRange == "";

  function handleDivClick() {
    if (showModal) {
      setShowModal(false);
    }
  }

  function handleNameInputChange(value) {
    setLoanInputs({ ...loanInputs, name: value });
  }

  function handlePhoneInputChange(value) {
    setLoanInputs({ ...loanInputs, phoneNumber: value });
  }
  function handleAgeInputChange(value) {
    setLoanInputs({ ...loanInputs, age: value });
  }

  return (
    <div
      onClick={handleDivClick}
      className="min-h-screen flex items-center justify-center p-5"
    >
      <form className="w-full max-w-md bg-blue-600/40 backdrop-blur-md rounded-2xl p-6 shadow-lg">
        <h1 className="text-white text-2xl font-bold text-center">
          Requesting a Loan
        </h1>

        <hr className="my-5 border-white/30" />
        <h1 className="text-white text-2xl font-bold text-center">
          hello {userData.name}
        </h1>
        <hr className="my-5 border-white/30" />

        <div className="flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col gap-1">
            <LoanInputContext.Provider
              value={{
                Value: loanInputs.name,
                labelTitle: "Name",
                handleChange: handleNameInputChange,
                setInput: "Name",
              }}
            >
              <MyComponent />
            </LoanInputContext.Provider>
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1">
            <LoanInputContext.Provider
              value={{
                Value: loanInputs.phoneNumber,
                labelTitle: "Phone Number",
                handleChange: handlePhoneInputChange,
                setInput: "Phone Number",
              }}
            >
              <MyComponent />
            </LoanInputContext.Provider>
          </div>

          {/* Age */}
          <div className="flex flex-col gap-1">
            <LoanInputContext.Provider
              value={{
                Value: loanInputs.age,
                labelTitle: "Age",
                handleChange: handleAgeInputChange,
                setInput: "Age",
              }}
            >
              <MyComponent />
            </LoanInputContext.Provider>
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-3 mt-2">
            <input
              value={loanInputs.isEmployee}
              checked={loanInputs.isEmployee}
              onChange={(event) => {
                setLoanInputs({
                  ...loanInputs,
                  isEmployee: event.target.checked,
                });
              }}
              type="checkbox"
              className="w-5 h-5 accent-cyan-400 cursor-pointer"
            />
            <p className="text-white text-sm font-medium">
              Are you an employee?
            </p>
          </div>
          {/* Salary */}
          <div className="flex flex-col gap-1">
            <label className="text-white text-sm font-medium">Salary</label>
            <select
              value={loanInputs.salaryRange}
              onChange={(event) => {
                setLoanInputs({
                  ...loanInputs,
                  salaryRange: event.target.value,
                });
              }}
              className="p-3 rounded-xl bg-blue-600
               border-2 border-white/30
               text-white
               focus:outline-none
               focus:border-cyan-400
               focus:ring-2 focus:ring-cyan-400
               transition"
            >
              <option value="" disabled className="text-gray-300">
                Select your salary
              </option>
              <option value="500">Less than $500</option>
              <option value="1000">$500 – $1000</option>
              <option value="2000">$1000 – $2000</option>
              <option value="3000">More than $2000</option>
            </select>
          </div>

          {/* Button */}
          <button
            disabled={btnIsDisabled}
            onClick={handleFormSubmit}
            type="submit"
            className={`mt-4 font-bold py-3 rounded-xl transition ${
              btnIsDisabled
                ? "bg-gray-600 text-white cursor-not-allowed"
                : "bg-cyan-400 text-blue-900 hover:bg-cyan-300"
            }`}
          >
            Submit Request
          </button>
        </div>
      </form>
      <Modal errorMessage={errorMessage} isVisible={showModal} />
    </div>
  );
}
