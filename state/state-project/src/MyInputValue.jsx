import { useState } from "react";
export default function MyInputValue() {
  const [MyInputValue, setMyInputValue] = useState("");
  function handleInputChange(event) {
    setMyInputValue(event.target.value);
  }
  return (
    <>
      <div className="flex items-center justify-center w-full bg-gray-700 text-xl  p-10 flex-col">
        <label>Enyer your name</label>
        <input
          className="bg-white text-black mt-5"
          value={MyInputValue}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
}
