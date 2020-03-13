import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AppRoute from "./components/Common/AppRoute";
import MainLayout from "./components/Common/MainLayout";
import EmptyLayout from "./components/Common/EmptyLayout";
import Login from "./components/Account/Login";
import Register from "./components/Account/Register";
import Home from "./components/Home";
import { authHeader } from "../src/helpers";
import Account from "./components/Account";

function App() {
  authHeader();
  return (
    <Router>
      <div className="App">
        <Switch>
          <AppRoute exact path="/" layout={MainLayout} component={Home} />
          <AppRoute
            exact
            path="/Account/Login"
            layout={EmptyLayout}
            component={Login}
          />
          <AppRoute
            exact
            path="/Account/Register"
            layout={EmptyLayout}
            component={Register}
          />
          <AppRoute
            exact
            path="/Account"
            layout={MainLayout}
            component={Account}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
