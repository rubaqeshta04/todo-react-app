import { useState } from "react";

export default function Scoreboard() {
  const [score, setScore] = useState({
    firstName: "",
    lastName: "",
    Score: 0,
  });
  console.log("aaaa", score);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center flex-col gap-4">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-[350px] flex flex-col gap-4">
          <div className="flex items-center justify-start px-4 py-4 gap-5">
            <label className="text-lg font-semibold  gap-5">
              Score : <b>{score.Score}</b>
              {""}
              <button
                className="bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition self-center w-15 ml-2"
                onClick={() => {
                  setScore({ ...score, Score: score.Score + 1 });
                }}
              >
                +1
              </button>
            </label>
          </div>

          <div className="flex gap-1 items-center justify-start">
            <label className="text-md text-gray-600">First name</label>
            <input
              className="border-2 border-gray-300 rounded-lg px-2 py-2 focus:outline-none focus:border-black transition"
              placeholder="Enter your name"
              value={score.firstName}
              onChange={(event) => {
                setScore({ ...score, firstName: event.target.value });
              }}
            />
          </div>
          <div className="flex gap-1 items-center justify-start">
            <label className="text-md text-gray-600">Last name</label>
            <input
              className="border-2 border-gray-300 rounded-lg px-2 py-2 focus:outline-none focus:border-black transition"
              placeholder="Enter your name"
              value={score.lastName}
              onChange={(event) => {
                setScore({ ...score, lastName: event.target.value });
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
