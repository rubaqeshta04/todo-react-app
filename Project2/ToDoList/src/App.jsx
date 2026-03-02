import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TodosContext } from "./contexts/todosContext";

// Others
import { v4 as uuid4 } from "uuid";

const initialTodos = [
  {
    id: uuid4(),
    title: "مذاكرة رياكت",
    details: "إكمال فصل الـ Hooks والتطبيق عليها",
    isCompleted: false,
  },
  {
    id: uuid4(),
    title: "تمارين رياضية",
    details: "الذهاب إلى الجيم لمدة ساعة",
    isCompleted: false,
  },
  {
    id: uuid4(),
    title: "قراة قران كريم",
    details: "ختم القران قبل نهاية شهر رمضان",
    isCompleted: true,
  },
];
function App() {
  const [todos, setTodos] = useState(initialTodos);

  const theme = createTheme({
    typography: {
      fontFamily: ["Cairo, sans-serif"].join(","),
    },
    palette: {
      primary: {
        main: "#008080", // Premium Teal
      },
      secondary: {
        main: "#ff4081",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <div
          className="flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300 min-h-screen p-4"
          dir="rtl"
        >
          <TodosContext.Provider value={{ todos, setTodos }}>
            <TodoList />
          </TodosContext.Provider>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
