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
import { useContext, useEffect, useState, useMemo } from "react";
import { TodosContext } from "../contexts/todosContext";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// Others
import { v4 as uuid4 } from "uuid";

export default function TodoList() {
  const [titleInput, setTitleInput] = useState("");
  const { todos, setTodos } = useContext(TodosContext);
  const [displayedTodosType, setDisplayedTodosType] = useState("all");
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState(null);

  // filteration arrays

  const completedTodos = useMemo(() => {
    return todos.filter((todo) => {
      return todo.isCompleted;
    });
  }, [todos]);

  const notCompletedTodos = useMemo(() => {
    return todos.filter((todo) => {
      return !todo.isCompleted;
    });
  }, [todos]);

  let todosToBeRendered = todos;
  if (displayedTodosType == "completed") {
    todosToBeRendered = completedTodos;
  } else if (displayedTodosType == "non-completed") {
    todosToBeRendered = notCompletedTodos;
  } else {
    todosToBeRendered = todos;
  }

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

  function openDeleteDialog(todo) {
    setTodoToDelete(todo);
    setShowDeleteDialog(true);
  }

  function openEditDialog(todo) {
    setTodoToEdit(todo);
    setShowEditDialog(true);
  }
  function handleClosedClicked() {
    setShowEditDialog(false);
  }

  const todosList = todosToBeRendered.map((t) => {
    return (
      <Todo
        key={t.id}
        todo={t}
        openDeleteDialog={openDeleteDialog}
        openEditDialog={openEditDialog}
      />
    );
  });
  return (
    <>
      {/* Delete Modal */}
      <Dialog
        dir="rtl"
        onClose={() => {
          setShowDeleteDialog(false);
        }}
        open={showDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          هل انت متاكد من رغبتك في حذف هذه المهمة؟
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            لا يمكنك استرجاع هذه المهمة بعد
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setShowDeleteDialog(false);
            }}
          >
            اغلاق
          </Button>
          <Button
            autoFocus
            onClick={() => {
              const updatedTodos = todos.filter(
                (t) => t.id !== todoToDelete.id,
              );
              setTodos(updatedTodos);
              localStorage.setItem("todos", JSON.stringify(updatedTodos));
              setShowDeleteDialog(false);
            }}
          >
            موافق
          </Button>
        </DialogActions>
      </Dialog>
      {/* ==== Delete Modal ==== */}
      {/* Edit Modal */}
      <Dialog
        dir="rtl"
        onClose={() => {
          handleClosedClicked(false);
        }}
        open={showEditDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          هل انت متاكد من رغبتك في تعديل هذه المهمة؟
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="text"
            label="عنوان المهمة"
            fullWidth
            variant="standard"
            value={todoToEdit?.title || ""}
            onChange={(e) =>
              setTodoToEdit({ ...todoToEdit, title: e.target.value })
            }
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="text"
            label="وصف المهمة"
            fullWidth
            variant="standard"
            value={todoToEdit?.details || ""}
            onChange={(e) =>
              setTodoToEdit({ ...todoToEdit, details: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setShowEditDialog(false);
            }}
          >
            اغلاق
          </Button>
          <Button
            autoFocus
            onClick={() => {
              const updatedTodos = todos.map((t) => {
                if (t.id === todoToEdit.id) {
                  return {
                    ...t,
                    title: todoToEdit.title,
                    details: todoToEdit.details,
                  };
                }
                return t;
              });
              setTodos(updatedTodos);
              localStorage.setItem("todos", JSON.stringify(updatedTodos));
              setShowEditDialog(false);
            }}
          >
            موافق
          </Button>
        </DialogActions>
      </Dialog>
      {/* === Edit Modal === */}
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
      </Container>{" "}
    </>
  );
}
