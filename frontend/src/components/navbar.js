import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbarMenu = this.toggleNavbarMenu.bind(this);
    this.state = { navbarMenuIsExpanded: false };
  }

  toggleNavbarMenu() {
    this.setState({ navbarMenuIsExpanded: !this.state.navbarMenuIsExpanded });
  }

  appendIsActiveWhenExpanded(classes) {
    if (this.state.navbarMenuIsExpanded) {
      classes += " is-active";
    }

    return classes;
  }

  render() {
    return (
      <nav
        data-testid="navbar"
        className="navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            ></img>
          </Link>

          <a
            role="button"
            onClick={this.toggleNavbarMenu}
            className={this.appendIsActiveWhenExpanded("navbar-burger burger")}
            aria-label="menu"
            aria-expanded={this.state.navbarMenuIsExpanded}
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={this.appendIsActiveWhenExpanded("navbar-menu")}
        >
          <div className="navbar-start">
            <Link
              onClick={this.toggleNavbarMenu}
              className="navbar-item"
              to={this.props.urlMap.homeUrl}
            >
              Home
            </Link>
            <Link
              onClick={this.toggleNavbarMenu}
              className="navbar-item"
              to={this.props.urlMap.createMentalHealthPlanUrl}
            >
              Make a Mental Health Plan
            </Link>
            <Link
              onClick={this.toggleNavbarMenu}
              className="navbar-item"
              to={this.props.urlMap.aboutUrl}
            >
              About
            </Link>
          </div>
          <div className="navbar-end"></div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
