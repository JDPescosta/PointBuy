
import "phoenix_html";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Home from "./containers/Home/Home";
import Loading from "./components/Loading/Loading"
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const App = () => {
  const [client, setClient] = useState(null);

  useEffect(() => {
    setClient(
      new ApolloClient({
        uri: `${window.BASE_URL}/api` 
      })
    );
  }, [window.BASE_URL]);

  return client && (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
