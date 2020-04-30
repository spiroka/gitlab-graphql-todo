import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Todos from "./todos";
import { Container } from "@material-ui/core";

const client = new ApolloClient({
  uri: process.env.REACT_APP_URI,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
  }
});

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Container>
          <CssBaseline />
          <Todos />
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
