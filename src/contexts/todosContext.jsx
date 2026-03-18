import { createContext, useReducer } from "react";
import todosReducer from "../reducers/todosReducer";
import { useContext } from "react";
export const TodosContext = createContext([]);
export const DispatchContext = createContext(null);

const TodosProvider = ({ children }) => {
  const [todos, Dispatch] = useReducer(todosReducer, []);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={Dispatch}>
        {children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
};

export const useTodos = () => {
  return useContext(TodosContext);
};

export const useTodosDispatch = () => {
  return useContext(DispatchContext);
};
export default TodosProvider;
