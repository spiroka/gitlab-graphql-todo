import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { List } from "@material-ui/core";
import TodoItem from "./todo-item";
import { TodosData } from "../types/TodosData";
import { TODOS } from "../queries/todo";

export default function Todos() {
  const { loading, error, data } = useQuery<TodosData>(TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <List>{data?.currentUser?.todos?.nodes?.map(todo => todo && <TodoItem todo={todo} />)}</List>
  );
}
