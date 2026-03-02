import { useState } from "react";

export default function ArrayState() {
  const [names, setNames] = useState([
    { id: 1, name: "ruba" },
    { id: 2, name: "ali" },
    { id: 3, name: "sara" },
  ]);
  const [inputName, setInputName] = useState("");
  const [nextId, setNextId] = useState(4);

  function handleAddClicked(e) {
    e.preventDefault();
    setNames([...names, { id: nextId, name: inputName }]);
    setNextId(nextId + 1);
    console.log("ruba", nextId);
    setInputName("");
  }

  function handleDeleteClicked(idToDelete) {
    // const newNames = [...names];
    // let index = 0;
    // let selectedIndex = 0;
    // for (let name of newNames) {
    //   if (name.id === idToDelete) {
    //     selectedIndex = index;
    //   }
    //   index++;
    // }
    // newNames.splice(selectedIndex, 1);
    // setNames(newNames);

    const newNames = names.filter((name) => {
      return name.id !== idToDelete;
    });
    setNames(newNames);
  }

  return (
    <>
      <div className="flex items-center justify-center mt-50 flex-col font-bold text-2xl">
        <ul>
          {names.map((name) => (
            <li key={name.id}>
              {name.name}
              <button
                className="bg-gray-400 text-black py-2 rounded-xl ml-10 mb-5"
                onClick={() => handleDeleteClicked(name.id)}
              >
                delete
              </button>
            </li>
          ))}
        </ul>

        <div>
          <input
            className="border-2 border-gray-300 rounded-lg px-2 py-2"
            placeholder="Enter a name"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <button
            onClick={handleAddClicked}
            className="bg-black text-white py-2 rounded-xl ml-2"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}
