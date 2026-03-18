import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Container from "@mui/material/Container";
import { TodosContext } from "../contexts/todosContext";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import { ToastContext, useToast } from "../contexts/ToastContext";
import todosReducer from "../reducers/todosReducer";
import { useTodosDispatch } from "../contexts/todosContext";

export default function Todo({ todo, openDeleteDialog, openEditDialog }) {
  const dispatch = useTodosDispatch();
  const { showHideToast } = useToast();

  // Event Handlers
  function handleCheckClicked() {
    dispatch({ type: "toggledCompleted", payload: todo });
    showHideToast("تم الانتهاء من المهمة ");
  }

  function handleDeleteClicked() {
    openDeleteDialog(todo);
  }

  function handleEdit() {
    openEditDialog(todo);
  }
  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          backgroundColor: todo.isCompleted ? "#e0f2f1" : "white",
          color: "inherit",
          marginTop: "16px",
          borderRadius: "12px",
          transition: "all 0.3s ease",
          border: "1px solid",
          borderColor: todo.isCompleted ? "#b2dfdb" : "#e0e0e0",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          ":hover": {
            boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
            transform: "translateY(-2px)",
          },
        }}
      >
        <CardContent sx={{ pb: "16px !important" }}>
          <Grid container spacing={2} alignItems="flex-end">
            <Grid
              item
              xs={12}
              sm={8}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                  color: todo.isCompleted ? "text.secondary" : "text.primary",
                  textAlign: "right",
                  width: "100%",
                }}
              >
                {todo.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  textAlign: "right",
                  width: "100%",
                  mt: 0.5,
                }}
              >
                {todo.details}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              className="flex justify-end items-end"
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", sm: "flex-end" },
                alignItems: "flex-end",
                gap: 1,
              }}
            >
              {/* Check Icon Button  */}
              <IconButton
                onClick={() => handleCheckClicked()}
                aria-label="complete"
                sx={{
                  color: todo.isCompleted ? "white" : "#4caf50",
                  backgroundColor: todo.isCompleted ? "#4caf50" : "transparent",
                  border: "1px solid #4caf50",
                  "&:hover": {
                    backgroundColor: todo.isCompleted ? "#388e3c" : "#f1f8e9",
                  },
                }}
              >
                <CheckIcon fontSize="small" />
              </IconButton>

              {/* Edit Icon Button  */}
              <IconButton
                onClick={() => handleEdit()}
                aria-label="edit"
                sx={{
                  color: "#1976d2",
                  border: "1px solid #1976d2",
                  "&:hover": {
                    backgroundColor: "#e3f2fd",
                  },
                }}
              >
                <EditIcon fontSize="small" />
              </IconButton>

              {/* Delete Icon Button  */}
              <IconButton
                onClick={() => handleDeleteClicked()}
                aria-label="delete"
                sx={{
                  color: "#d32f2f",
                  border: "1px solid #d32f2f",
                  "&:hover": {
                    backgroundColor: "#ffebee",
                  },
                }}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
