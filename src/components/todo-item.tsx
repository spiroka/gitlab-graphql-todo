import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import CircularProgress from "@material-ui/core/CircularProgress";
import { TodosData_currentUser_todos_nodes } from "../types/TodosData";
import { useTodoToggle } from "../hooks";
import { TodoStateEnum } from "../types/globalTypes";

export default function TodoItem({ todo }: { todo: TodosData_currentUser_todos_nodes }) {
  const { toggle, loading } = useTodoToggle(todo);

  return (
    <ListItem dense button>
      <ListItemIcon>
        <>
          {loading && <CircularProgress size={42} color="secondary" disableShrink={true} />}
          {!loading && (
            <Checkbox checked={todo.state === TodoStateEnum.done} onChange={() => toggle()} />
          )}
        </>
      </ListItemIcon>
      <ListItemText primary={todo.body} />
    </ListItem>
  );
}
