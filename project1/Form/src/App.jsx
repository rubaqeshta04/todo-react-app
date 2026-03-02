import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoanForm from "./LoanForm";
import MyComponent from "./MyComponent";
import {userContext} from './Context/userContext'

function App() {
  return (
    <>
      <userContext.Provider value={{userName:"@Ruba" , email:"rubaqeshta@gmail.com" , name:"ruba"}}>
        <div className=" min-h-screen">
          <LoanForm />
        </div>
      </userContext.Provider>
    </>
  );
}

export default App;
