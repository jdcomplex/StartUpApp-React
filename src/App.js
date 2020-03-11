import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router,Switch } from 'react-router-dom';
import AppRoute from './components/AppRoute'
import MainLayout from './components/MainLayout';
import EmptyLayout from './components/EmptyLayout';
import Login from './components/Account/Login';
import Register from './components/Account/Register';
import Home from './components/Home';
import {authHeader} from '../src/helpers'


function App() {
  authHeader();
  return (<Router>
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <AppRoute exact path="/" layout={MainLayout} component={Home} />
            <AppRoute exact path="/Account/Login" layout={EmptyLayout} component={Login} />
            <AppRoute exact path="/Account/Register" layout={EmptyLayout} component={Register} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
