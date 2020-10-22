import React, { ReactElement } from "react";

type AboutProps = {
  navbar?: ReactElement;
  footer?: ReactElement;
};

function About(props: AboutProps): ReactElement {
  return (
    <div>
      {props.navbar}
      <div data-testid="about-container">
        <h2>About page</h2>
      </div>
      {props.footer}
    </div>
  );
}

export default About;
