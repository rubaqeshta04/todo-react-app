// let name = "saffa";

// export default function MyButton() {
//   const [name, setname] = useState("saffa");
//   function buttonClicked() {
//     setname("ruba");
//   }
//   return (
//     <div className="flex items-center w-full bg-gray-300 flex-col m-5 p-5">
//       <button className="rounded-xl bg-white p-2" onClick={buttonClicked}>
//         Click Me
//       </button>
//       <h1>{name}</h1>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function MyApp() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }
//   return (
//     <div className="flex flex-col items-center m-10 p-10 w-full bg-gray-200">
//       <h1 className="mb-5">العدادات التي تتغير مستقلة</h1>
//       <MyButton count={count} onClick={handleClick} />
//       <MyButton count={count} onClick={handleClick} />
//     </div>
//   );
// }

// function MyButton({ count, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="bg-black text-white p-2 rounded-lg mb-2"
//     >
//       Clicked {count} times
//     </button>
//   );
// }

// import { useState } from "react";
// export default function MyButton() {
// console.log("render");

//   const [name , setName] = useState("ahmed");
//   console.log(useState(name));

//   function buttonClicked() {
//    setName(name ==="ahmed" ? "ruba" : "ahmed")
//   }

//   return (
//     <div>
//       <button
//         className="bg-black text-white p-2 rounded-lg mb-2"
//         onClick={buttonClicked}
//       >
//         Click Me
//       </button>
//       <h1>{name}</h1>
//     </div>
//   );
// }

import { useState } from "react";
export default function MyButton() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center justify-center w-full bg-gray-700 text-xl text-white p-10 flex-col">
      <h1>العداد : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >زود العد</button>
    </div>
  );
}


