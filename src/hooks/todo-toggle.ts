import { useMutation } from "react-apollo";
import { markDone, markDoneVariables } from "../types/markDone";
import { restore, restoreVariables } from "../types/restore";
import { useCallback } from "react";
import { TodosData_currentUser_todos_nodes } from "../types/TodosData";
import { MARK_DONE, RESTORE } from "../mutations/todo";

export function useTodoToggle(
  todo: TodosData_currentUser_todos_nodes
): { toggle: Function; loading: boolean } {
  const [markTodoDone, { loading: markingDone }] = useMutation<markDone, markDoneVariables>(
    MARK_DONE,
    {
      variables: { id: todo.id }
    }
  );
  const [restoreTodo, { loading: restoring }] = useMutation<restore, restoreVariables>(RESTORE, {
    variables: { id: todo.id }
  });

  const loading = markingDone || restoring;

  const toggle = useCallback(() => (todo.state === "done" ? restoreTodo() : markTodoDone()), [
    markTodoDone,
    restoreTodo,
    todo
  ]);

  return { toggle, loading };
}
