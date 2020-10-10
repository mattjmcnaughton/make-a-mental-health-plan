import axios from 'axios';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// @TODO: Write unit tests - smallest components as possible.
// @TODO: Separate UI and logic (and interactions w/ backend).
//   UI should purely be responsible for displaying data and interacting w/ user.
// @TODO: Abstract backend call from `MentalHealthPlanControl`.

// https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f

class MentalHealthPlanControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {submitted: false};
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {data[key] = value});
    axios.post('/plans', data)
      .then(function(response) {
        this.setState({submitted: true});
      }.bind(this))
      .catch(function(error) {
        // Need a better error mechanism
        this.setState({submitted: true});
        console.log(error);
      }.bind(this));
  }

  render() {
    let buttonTestId = this.state.submitted ? "button-submitted" : "button-submit"
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Name" />
          </div>
        </div>

        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea" placeholder="Make a mental health plan"></textarea>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" data-testid={buttonTestId} disabled={this.state.submitted}>Submit</button>
          </div>
          <div class="control">
            <button class="button is-link is-light" data-testid={buttonTestId} disabled={this.state.submitted}>Clear Form</button>
          </div>
        </div>
      </form>
    );
  }
}

function Home() {
  return <h2>Home page</h2>;
}

function About() {
  return <h2>About </h2>;
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
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <Link class="navbar-item" to="/">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
          </Link>

          <a role="button" onClick={this.toggleNavbarMenu} className={this.appendIsActiveWhenExpanded("navbar-burger burger")} aria-label="menu" aria-expanded={this.state.navbarMenuIsExpanded} data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={this.appendIsActiveWhenExpanded("navbar-menu")}>
          <div class="navbar-start">
            <Link onClick={this.toggleNavbarMenu} class="navbar-item" to={this.props.urlMap.homeUrl}>Home</Link>
            <Link onClick={this.toggleNavbarMenu} class="navbar-item" to={this.props.urlMap.makePlanUrl}>Make a Mental Health Plan</Link>
            <Link onClick={this.toggleNavbarMenu} class="navbar-item" to={this.props.urlMap.aboutUrl}>About</Link>
          </div>
          <div class="navbar-end"></div>
        </div>
      </nav>
    );
  }
}

function App(props) {
  const urlMap = {
    aboutUrl: "/about",
    makePlanUrl: "/make-plan",
    homeUrl: "/"
  };

  return (
    <Router>
      <div>
        <Navbar urlMap={urlMap}/>

        <Switch>
          <Route path={urlMap.aboutUrl}>
            <About />
          </Route>
          <Route path={urlMap.makePlanUrl}>
            <MentalHealthPlanControl />
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