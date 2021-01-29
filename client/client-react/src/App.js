import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import { ApolloProvider } from 'react-apollo';

import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Ninja's Reading List</h1>
        <AddBook />
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
