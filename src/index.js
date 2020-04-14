import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


import Home from './pages/Home.js';
import Index from "./pages/Index.js";
import Landing from "./pages/Landing.js";
import Login from "./pages/Login.js";
import Profile from "./pages/Profile.js";
import Register from "./pages/Register.js";
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={props => <Index {...props} />} />
        <Route
          path="/landing-page"
          exact
          render={props => <Landing {...props} />}
        />
        <Route
          path="/home-page"
          exact
          render={props => <Home {...props} />}
        />
        <Route path="/login-page" exact render={props => <Login {...props} />} />
        <Route
          path="/profile-page"
          exact
          render={props => <Profile {...props} />}
        />
        <Route
          path="/register-page"
          exact
          render={props => <Register {...props} />}
        />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
