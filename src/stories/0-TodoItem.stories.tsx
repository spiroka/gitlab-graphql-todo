import React from "react";
import TodoItem from "../components/todo-item";
import { RESTORE, MARK_DONE } from "../mutations/todo";
import { TodoStateEnum } from "../types/globalTypes";
import { MockedProvider } from "@apollo/react-testing";

export default {
  title: "TodoItem",
  component: TodoItem
};

const mockTodo = {
  id: "todo",
  body: "Buy milk"
};

const mocks = [
  {
    request: {
      query: RESTORE,
      variables: { id: mockTodo.id }
    },
    result: () => {
      return {
        data: {
          todoMarkDone: {
            todo: { id: mockTodo.id, state: TodoStateEnum.pending }
          }
        }
      };
    }
  },
  {
    request: {
      query: MARK_DONE,
      variables: { id: mockTodo.id }
    },
    result: () => {
      return {
        data: {
          todoMarkDone: {
            todo: { id: mockTodo.id, state: TodoStateEnum.done }
          }
        }
      };
    }
  }
];

export const pending = () => (
  <MockedProvider mocks={mocks} addTypename={false}>
    <TodoItem todo={{ ...mockTodo, state: TodoStateEnum.pending } as any} />
  </MockedProvider>
);

export const done = () => (
  <MockedProvider mocks={mocks} addTypename={false}>
    <TodoItem todo={{ ...mockTodo, state: TodoStateEnum.done } as any} />
  </MockedProvider>
);
