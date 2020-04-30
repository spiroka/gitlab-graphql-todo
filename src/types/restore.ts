/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TodoStateEnum } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: restore
// ====================================================

export interface restore_todoRestore_todo {
  __typename: "Todo";
  /**
   * Id of the todo
   */
  id: string;
  /**
   * State of the todo
   */
  state: TodoStateEnum;
}

export interface restore_todoRestore {
  __typename: "TodoRestorePayload";
  /**
   * The requested todo
   */
  todo: restore_todoRestore_todo;
}

export interface restore {
  todoRestore: restore_todoRestore | null;
}

export interface restoreVariables {
  id: string;
}
