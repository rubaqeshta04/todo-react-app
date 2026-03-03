import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Todo from "./Todo";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useContext, useEffect, useState } from "react";
import { TodosContext } from "../contexts/todosContext";

// Others
import { v4 as uuid4 } from "uuid";

export default function TodoList() {
  const [titleInput, setTitleInput] = useState("");
  const { todos, setTodos } = useContext(TodosContext);
  const [displayedTodosType, setDisplayedTodosType] = useState("all");

  // filteration arrays
  const completedTodos = todos.filter((todo) => {
    return todo.isCompleted;
  });

  const notCompletedTodos = todos.filter((todo) => {
    return !todo.isCompleted;
  });

  let todosToBeRendered = todos;
  if (displayedTodosType == "completed") {
    todosToBeRendered = completedTodos;
  } else if (displayedTodosType == "non-completed") {
    todosToBeRendered = notCompletedTodos;
  } else {
    todosToBeRendered = todos;
  }

  const todosList = todosToBeRendered.map((t) => {
    return <Todo key={t.id} todo={t} />;
  });

  function changeDisplayedType(e) {
    return setDisplayedTodosType(e.target.value);
  }

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storageTodos);
  }, []);

  function handleAddClick() {
    const newTodo = {
      id: uuid4(),
      title: titleInput,
      details: "",
      isCompleted: false,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTitleInput("");
  }
  // const [alignment, setAlignment] = useState("الكل");
  return (
    <Container maxWidth="sm">
      <Card
        sx={{
          minWidth: 275,
          maxHeight: "90vh",
          overflowY: "auto",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          p: 2,
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            sx={{ fontWeight: "bold", textAlign: "center", mb: 3 }}
          >
            قائمة مهامي
          </Typography>
          <Divider />
          {/* Start Filters Buttons */}
          <div className="flex justify-center mt-6 mb-4">
            <ToggleButtonGroup
              value={displayedTodosType}
              exclusive
              onChange={changeDisplayedType}
              dir="ltr"
              color="primary"
              size="small"
            >
              <ToggleButton value="non-completed">قيد التنفيذ</ToggleButton>
              <ToggleButton value="completed">المنجزة</ToggleButton>
              <ToggleButton value="all">الكل</ToggleButton>
            </ToggleButtonGroup>
          </div>
          {/* Final Filters Buttons */}
          {/* All TODOS */}
          <div className="space-y-4">{todosList}</div>
          {/* ==== All TODOS ==== */}
          {/* Input + Add Button */}
          <Grid container spacing={2} sx={{ mt: 4, alignItems: "center" }}>
            <Grid item xs={8}>
              <TextField
                id="todo-title-input"
                label="أضف مهمة جديدة..."
                variant="outlined"
                fullWidth
                value={titleInput}
                onChange={(e) => {
                  setTitleInput(e.target.value);
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && titleInput.length > 0) {
                    handleAddClick();
                  }
                }}
              />
            </Grid>

            <Grid item xs={4}>
              <Button
                onClick={() => handleAddClick()}
                variant="contained"
                fullWidth
                sx={{
                  height: "56px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                }}
                color="primary"
                disabled={titleInput.length === 0}
              >
                إضافة
              </Button>
            </Grid>
          </Grid>
          {/* ==== Input + Add Button =====*/}
        </CardContent>
      </Card>
    </Container>
  );
}
