import { gql } from "apollo-boost";

export const TODOS = gql`
  query TodosData {
    currentUser {
      todos(state: [done, pending]) {
        nodes {
          id
          action
          body
          state
        }
      }
    }
  }
`;
