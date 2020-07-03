import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";

// import styled from "styled-components";

import Header from "./components/Header/Header";
import BMI from "./components/BMI/BMI";
import CatAge from "./components/CatAge/CatAge";
import TextTransform from "./components/TextTransform/TextTransform";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <BMI />
          </Route>
          <Route exact path="/catage">
            <CatAge />
          </Route>
          <Route exact path="/texttransform">
            <TextTransform />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
