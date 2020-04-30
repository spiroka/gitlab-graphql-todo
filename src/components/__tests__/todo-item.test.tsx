import React from "react";
import { create, act, ReactTestRenderer } from "react-test-renderer";
import { MockedProvider } from "@apollo/react-testing";
import { MARK_DONE, RESTORE } from "../../mutations/todo";
import { TodoStateEnum } from "../../types/globalTypes";
import TodoItem from "../todo-item";
import Checkbox from "@material-ui/core/Checkbox";
import CircularProgress from "@material-ui/core/CircularProgress";

describe("TodoItem", () => {
  describe("pending", () => {
    const pendingTodo = {
      id: "pendingTodo",
      state: TodoStateEnum.pending
    } as any;

    let markDoneCalled = false;

    const mocks = [
      {
        request: {
          query: MARK_DONE,
          variables: { id: pendingTodo.id }
        },
        result: () => {
          markDoneCalled = true;
          return {
            data: {
              todoMarkDone: {
                todo: { id: pendingTodo.id, state: TodoStateEnum.done }
              }
            }
          };
        }
      }
    ];

    let component: ReactTestRenderer;

    beforeEach(() => {
      component = create(
        <MockedProvider mocks={mocks} addTypename={false}>
          <TodoItem todo={pendingTodo} />
        </MockedProvider>
      );
    });

    it("should render an unchecked checkbox", () => {
      const checkBox = component.root.findByType(Checkbox);

      expect(checkBox.props.checked).toBe(false);
    });

    it("should mark the todo done", async () => {
      const checkBox = component.root.findByType(Checkbox);

      const update = act(() => checkBox.props.onChange());

      expect(component.root.findAllByType(CircularProgress)).toHaveLength(1);

      await update;

      expect(markDoneCalled).toBe(true);
      expect(component.root.findAllByType(CircularProgress)).toHaveLength(0);
    });
  });

  describe("done", () => {
    const doneTodo = { id: "doneTodo", state: TodoStateEnum.done } as any;

    let restoreCalled = false;

    const mocks = [
      {
        request: {
          query: RESTORE,
          variables: { id: doneTodo.id }
        },
        result: () => {
          restoreCalled = true;
          return {
            data: {
              todoRestore: {
                todo: { id: doneTodo.id, state: TodoStateEnum.pending }
              }
            }
          };
        }
      }
    ];

    let component: ReactTestRenderer;

    beforeEach(() => {
      component = create(
        <MockedProvider mocks={mocks} addTypename={false}>
          <TodoItem todo={doneTodo} />
        </MockedProvider>
      );
    });

    it("should render a checked checkbox", () => {
      const checkBox = component.root.findByType(Checkbox);

      expect(checkBox.props.checked).toBe(true);
    });

    it("should restore the todo", async () => {
      const checkBox = component.root.findByType(Checkbox);

      const update = act(() => checkBox.props.onChange());

      expect(component.root.findAllByType(CircularProgress)).toHaveLength(1);

      await update;

      expect(restoreCalled).toBe(true);
      expect(component.root.findAllByType(CircularProgress)).toHaveLength(0);
    });
  });
});
