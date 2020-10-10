import { createBrowserHistory } from 'history';
import React from 'react';
import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return (
    <div data-testid="home-container">
      <h2>Home page</h2>
    </div>
  );
}

function About() {
  return (
    <div data-testid="about-container">
      <h2>About page</h2>
    </div>
  );
}

function CreateMentalHealthPlan() {
  return (
    <div data-testid="create-mental-health-plan-container">
      <h2>Create a Mental Health Plan</h2>
    </div>
  );
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbarMenu = this.toggleNavbarMenu.bind(this);
    this.state = {navbarMenuIsExpanded: false};
  }

  toggleNavbarMenu(event) {
    this.setState({navbarMenuIsExpanded: !this.state.navbarMenuIsExpanded});
  }

  appendIsActiveWhenExpanded(classes) {
    if (this.state.navbarMenuIsExpanded) {
      classes += " is-active";
    }

    return classes;
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
          </Link>

          <a role="button" onClick={this.toggleNavbarMenu} className={this.appendIsActiveWhenExpanded("navbar-burger burger")} aria-label="menu" aria-expanded={this.state.navbarMenuIsExpanded} data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={this.appendIsActiveWhenExpanded("navbar-menu")}>
          <div className="navbar-start">
            <Link onClick={this.toggleNavbarMenu} className="navbar-item" to={this.props.urlMap.homeUrl}>Home</Link>
            <Link onClick={this.toggleNavbarMenu} className="navbar-item" to={this.props.urlMap.createMentalHealthPlanUrl}>Make a Mental Health Plan</Link>
            <Link onClick={this.toggleNavbarMenu} className="navbar-item" to={this.props.urlMap.aboutUrl}>About</Link>
          </div>
          <div className="navbar-end"></div>
        </div>
      </nav>
    );
  }
}

function App(props) {
  const urlMap = {
    aboutUrl: "/about",
    createMentalHealthPlanUrl: "/create-mental-health-plan",
    homeUrl: "/"
  };

  const history = props.history || createBrowserHistory();

  return (
    <Router history={history}>
      <div>
        <Navbar urlMap={urlMap}/>

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