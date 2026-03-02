import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyButton from "./MyButton";
import MyInputValue from "./MyInputValue";
import MyForm from "./MyForm";
import Scoreboard from "./Scoreboard";
import ArrayState from "./ArrayState"
import Test from "./Test"
import ArrayStateChallenge from "./ArrayStateChallenge"
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <MyForm/> */}
      {/* <Scoreboard /> */}
      {/* <ArrayState/> */}
      {/* <Test/> */}
      <ArrayStateChallenge/>
     
    </>
  );
}

export default App;
