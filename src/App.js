import React from "react";
import "./App.css";
import Login from "./screens/Login";
import TransferLoad from "./screens/TransferLoad";
import Transfer1 from "./screens/Transfer1";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/transfer">
            <Transfer1 />
          </Route>
          <Route exact path="/transferstatus">
            <TransferLoad />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
