import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  urlMap: {
    homeUrl: string;
    aboutUrl: string;
    createMentalHealthPlanUrl: string;
  };
}

interface NavbarState {
  navbarMenuIsExpanded: boolean;
}

class Navbar extends React.Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);

    this.toggleNavbarMenu = this.toggleNavbarMenu.bind(this);
  }

  state: NavbarState = {
    navbarMenuIsExpanded: false,
  };

  toggleNavbarMenu(): void {
    this.setState({ navbarMenuIsExpanded: !this.state.navbarMenuIsExpanded });
  }

  appendIsActiveWhenExpanded(classes: string): string {
    if (this.state.navbarMenuIsExpanded) {
      classes += " is-active";
    }

    return classes;
  }

  render(): ReactNode {
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
