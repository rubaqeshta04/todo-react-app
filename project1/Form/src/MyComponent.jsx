import { useContext } from "react";
import { LoanInputContext } from "./Context/loanFormInputContext";
import { userContext } from "./Context/userContext";
export default function MyComponent() {
  const InputContext = useContext(LoanInputContext);
  const userData = useContext(userContext);
  console.log("hello");
  console.log(InputContext);

  return (
    <>
      <label className="text-white text-sm font-medium">
        {userData.userName} {InputContext.labelTitle}
      </label>
      <input
        value={InputContext.Value}
        onChange={(event) => {
          InputContext.handleChange(event.target.value);
        }}
        placeholder={`enter your ${InputContext.setInput}`}
        className="p-3 rounded-xl bg-transparent
                         border-2 border-white/30
                         text-white placeholder-gray-300
                         focus:outline-none
                         focus:border-cyan-400
                         focus:ring-2 focus:ring-cyan-400
                         transition"
      />
    </>
  );
}

// export default function MyComponent({
//   label,
//   name,
//   value,
//   handleChange,
//   type = "text",
// }) {
//   return (
//     <div className="flex flex-col gap-1">
//       <label className="text-white text-sm font-medium">{label}</label>

//       <input
//         type={type}
//         value={type !== "checkbox" ? value : undefined}
//         checked={type === "checkbox" ? value : undefined}
//         onChange={(e) =>
//           handleChange(
//             name,
//             type === "checkbox" ? e.target.checked : e.target.value,
//           )
//         }
//         placeholder={type !== "checkbox" ? `Enter your ${label}` : undefined}
//         className="p-3 rounded-xl bg-transparent
//                    border-2 border-white/30
//                    text-white placeholder-gray-300
//                    focus:outline-none
//                    focus:border-cyan-400
//                    focus:ring-2 focus:ring-cyan-400
//                    transition"
//       />
//     </div>
//   );
// }
