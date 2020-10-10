import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./bootstrap (Lux) .min.css";
import "./App.scss";

import SearchContextProvider from "./Context/searchContext";
import UserContextProvider from "./Context/getUserContext";

import Navbar from "./Components/Navbar/Navbar.component";
import SearchForm from "./Components/SearchForm.component";
import UsersList from "./Components/UsersList.component";
import SingleUser from "./Components/SingleUser.component";

function App() {
  return (
    <SearchContextProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <SearchForm />
              <UsersList />
            </Route>

            <Route path="/user/:username" exact>
              <UserContextProvider>
                <SingleUser />
              </UserContextProvider>
            </Route>

            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    </SearchContextProvider>
  );
}

export default App;
