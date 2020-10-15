import React, { ReactElement } from "react";
import { BrowserHistory, createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";

import About from "./components/about";
import CreateMentalHealthPlan from "./components/createMentalHealthPlan";
import Home from "./components/home";
import Navbar from "./components/navbar";

const defaultAppProps = {
  history: createBrowserHistory(),
};

type AppProps = { history: BrowserHistory } & typeof defaultAppProps;

function App(props: AppProps): ReactElement {
  const urlMap = {
    aboutUrl: "/about",
    createMentalHealthPlanUrl: "/create-mental-health-plan",
    homeUrl: "/",
  };

  // TODO: Decide if I want to extract an app router...
  // Right now, we won't, but we can down the line.
  return (
    <Router history={props.history}>
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

App.defaultProps = defaultAppProps;

export default App;
