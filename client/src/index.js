import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Edit from "./components/Edit";
import Create from "./components/Create";
import Show from "./components/Show";

import App from "./App";

const client = new ApolloClient();

ReactDOM.render(
  <ApolloProvider client={client}>
    {/* <App /> */}
    <div>Teste</div>
  </ApolloProvider>,
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create" component={Create} />
      <Route path="/show/:id" component={Show} />
    </div>
  </Router>,
  document.getElementById("root")
);
