/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TodoActionEnum, TodoStateEnum } from "./globalTypes";

// ====================================================
// GraphQL query operation: TodosData
// ====================================================

export interface TodosData_currentUser_todos_nodes {
  __typename: "Todo";
  /**
   * Id of the todo
   */
  id: string;
  /**
   * Action of the todo
   */
  action: TodoActionEnum;
  /**
   * Body of the todo
   */
  body: string;
  /**
   * State of the todo
   */
  state: TodoStateEnum;
}

export interface TodosData_currentUser_todos {
  __typename: "TodoConnection";
  /**
   * A list of nodes.
   */
  nodes: (TodosData_currentUser_todos_nodes | null)[] | null;
}

export interface TodosData_currentUser {
  __typename: "User";
  /**
   * Todos of the user
   */
  todos: TodosData_currentUser_todos;
}

export interface TodosData {
  /**
   * Get information about current user
   */
  currentUser: TodosData_currentUser | null;
}
