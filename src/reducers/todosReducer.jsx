import { v4 as uuid4 } from "uuid";

export default function reducer(currentTodos, action) {
  switch (action.type) {
    case "added": {
      const newTodo = {
        id: uuid4(),
        title: action.payload.newTitle,
        details: "",
        isCompleted: false,
      };
      const updatedTodos = [...currentTodos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }

    case "deleted": {
      const updatedTodos = currentTodos.filter((t) => {
        return t.id !== action.payload.todoId;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }

    case "edited": {
      const updatedTodos = currentTodos.map((t) => {
        if (t.id === action.payload.todoToEdit.id) {
          return {
            ...t,
            title: action.payload.todoToEdit.title,
            details: action.payload.todoToEdit.details,
          };
        }
        return t;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }

    case "toggledCompleted": {
      const updatedTodos = currentTodos.map((t) => {
        if (t.id === action.payload.id) {
          return { ...t, isCompleted: !t.isCompleted };
        }
        return t;
      });

      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    case "get": {
      return JSON.parse(localStorage.getItem("todos")) || [];
    }

    default: {
      throw Error("Unknown Action" + action.type);
    }
  }
}
