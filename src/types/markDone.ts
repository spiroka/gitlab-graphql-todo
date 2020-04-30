/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TodoStateEnum } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: markDone
// ====================================================

export interface markDone_todoMarkDone_todo {
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

export interface markDone_todoMarkDone {
  __typename: "TodoMarkDonePayload";
  /**
   * The requested todo
   */
  todo: markDone_todoMarkDone_todo;
}

export interface markDone {
  todoMarkDone: markDone_todoMarkDone | null;
}

export interface markDoneVariables {
  id: string;
}
