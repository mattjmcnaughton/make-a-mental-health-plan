import React from "react";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";

import About from "./components/about";
import CreateMentalHealthPlan from "./components/createMentalHealthPlan";
import Home from "./components/home";
import Navbar from "./components/navbar";

function App(props) {
  const urlMap = {
    aboutUrl: "/about",
    createMentalHealthPlanUrl: "/create-mental-health-plan",
    homeUrl: "/",
  };

  const history = props.history || createBrowserHistory();

  // TODO: Decide if I want to extract an app router...
  // Right now, we won't, but we can down the line.
  return (
    <Router history={history}>
      <div>
        <Navbar urlMap={urlMap} />

        <Switch>
          <Route path={urlMap.aboutUrl}>
            <About />
          </Route>
          <Route path={urlMap.createMentalHealthPlanUrl}>
            <CreateMentalHealthPlan />
          </Route>
          <Route path={urlMap.homeUrl}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
