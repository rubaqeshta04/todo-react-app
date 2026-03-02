import { useState } from "react";

export default function Test() {
  const [names, setNames] = useState([
    { id: 1, name: "ruba" },
    { id: 2, name: "ali" },
    { id: 3, name: "sara" },
  ]);
  const [nameInput, setNameInput] = useState("");

  function handelAddName(event) {
    event.preventDefault();
    setNames([...names, { id: names.length + 1, name: nameInput }]);
    setNameInput("");
    console.log("nameInput", nameInput);
  }

  return (
    <>
      <div className="flex items-center justify-center mt-50 flex-col font-bold text-2xl">
        <ul>
          {names.map((name) => {
            return (
              <li key={name.id}>
                {name.name}
                <button
                  className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => {
                    setNames(names.filter((n) => n.id !== name.id));
                  }}
                >
                  Delete
                </button>
                <button
                  className="bg-black text-white py-2 rounded-xl ml-2"
                  onClick={() => {
                    setNames(names.map((nameItem)=> nameItem.id === name.id ? {...nameItem, name: "ruba"} : nameItem));
                    
                  }}
                >
                  Edit
                </button>
              </li>
            );
          })}
        </ul>

        <div>
          <input
            className="border-2 border-gray-300 rounded-lg px-2 py-2"
            placeholder="Enter a name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <button
            className="bg-black text-white py-2 rounded-xl ml-2"
            onClick={handelAddName}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}
