import { useState } from "react";

export default function MyForm() {
  // const [nameInput, setNameInput] = useState("");
  // const [emailInput, setEmailInput] = useState("");

  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    age: "",
    generalInfo: "",
    checkYourSelf: false,
    country: "",
    status: "",
  });
  console.log(formInputs);
  function handelCheckBoxChanged(event) {
    setFormInputs({ ...formInputs, checkYourSelf: event.target.checked });
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-[350px] flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Contact Form
          </h2>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Name</label>
            <input
              className="border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-black transition"
              placeholder="Enter your name"
              value={formInputs.name}
              onChange={(event) => {
                // const newFormInput = { ...formInputs };
                // newFormInput.name = event.target.value;
                // setFormInputs(newFormInput);
                setFormInputs({ ...formInputs, name: event.target.value });
              }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Email</label>
            <input
              className="border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-black transition"
              placeholder="Enter your email"
              value={formInputs.email}
              onChange={(event) => {
                // const newFormInput = { ...formInputs };
                // newFormInput.email = event.target.value;
                // setFormInputs(newFormInput);
                setFormInputs({ ...formInputs, email: event.target.value });
              }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Age</label>
            <input
              className="border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-black transition"
              placeholder="Enter your age"
              value={formInputs.age}
              onChange={(event) => {
                // const newFormInput = { ...formInputs };
                // newFormInput.age = event.target.value;
                // setFormInputs(newFormInput);
                setFormInputs({ ...formInputs, age: event.target.value });
              }}
            />
          </div>
          <div className="flex items-center justify-start gap-2">
            <input
              type="checkbox"
              className="border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-black transition"
              placeholder="Enter your age"
              value={formInputs.checkYourSelf}
              onChange={handelCheckBoxChanged}
            />
            <label className="text-sm text-gray-600">Are you a student?</label>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">General Info</label>
            <textarea
              className="border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-black transition"
              placeholder="Enter your age"
              value={formInputs.generalInfo}
              onChange={(event) => {
                // const newFormInput = { ...formInputs };
                // newFormInput.age = event.target.value;
                // setFormInputs(newFormInput);
                setFormInputs({
                  ...formInputs,
                  generalInfo: event.target.value,
                });
              }}
            />
          </div>

          <div className="flex flex-col gap-1">
            <select
              className="border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-black transition"
              value={formInputs.country}
              onChange={(event) => {
                setFormInputs({ ...formInputs, country: event.target.value });
              }}
            >
              <option>JS</option>
              <option>React</option>
              <option>Next.js</option>
            </select>
          </div>

          <div className="flex gap-2">
            <input
              value="student"
              type="radio"
              checked={formInputs.status === "student"}
              onChange={(event) => {
                setFormInputs({ ...formInputs, status: event.target.value });
              }}
            />
            student
            <input
              value="engineer"
              type="radio"
              checked={formInputs.status === "engineer"}
              onChange={(event) => {
                setFormInputs({ ...formInputs, status: event.target.value });
              }}
            />
            engineer
          </div>

          <button className="mt-4 bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition self-center w-full">
            Submit
          </button>
        </div>
      </div>
      {/* console.log(formInputs); */}
    </form>
  );
}
