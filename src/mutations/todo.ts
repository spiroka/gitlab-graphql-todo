import { gql } from "apollo-boost";

export const MARK_DONE = gql`
  mutation markDone($id: ID!) {
    todoMarkDone(input: { id: $id }) {
      todo {
        id
        state
      }
    }
  }
`;

export const RESTORE = gql`
  mutation restore($id: ID!) {
    todoRestore(input: { id: $id }) {
      todo {
        id
        state
      }
    }
  }
`;
