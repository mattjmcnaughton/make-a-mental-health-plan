import React, { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";
import { MemoryHistory } from "history";

import About from "./components/about";
import CreateMentalHealthPlan from "./components/createMentalHealthPlan";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";

// Setting the `routerComponent` to `React.ComponentType<any>` is pretty hacky... but I've already
// spent more time than I want trying to figure out the types here...
type AppProps = {
  // eslint-disable-next-line
  routerComponent: React.ComponentType<any>;
  history?: MemoryHistory;
};

function App(props: AppProps): ReactElement {
  const urlMap = {
    aboutUrl: "/about",
    createMentalHealthPlanUrl: "/create-mental-health-plan",
    homeUrl: "/",
  };

  // TODO: Decide if I want to extract an app router...
  // Right now, we won't, but we can down the line.
  return (
    <props.routerComponent history={props.history}>
      <div>
        <Switch>
          <Route path={urlMap.aboutUrl}>
            <About navbar={<Navbar urlMap={urlMap} />} />
          </Route>
          <Route path={urlMap.createMentalHealthPlanUrl}>
            <CreateMentalHealthPlan navbar={<Navbar urlMap={urlMap} />} />
          </Route>
          <Route path={urlMap.homeUrl}>
            <Home navbar={<Navbar urlMap={urlMap} />} footer={<Footer />} />
          </Route>
        </Switch>
      </div>
    </props.routerComponent>
  );
}

export default App;
