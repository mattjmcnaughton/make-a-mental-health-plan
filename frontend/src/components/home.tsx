import React, { ReactElement } from "react";

type HomeProps = {
  navbar?: ReactElement;
  footer?: ReactElement;
};

function Home(props: HomeProps): ReactElement {
  return (
    <section
      className="hero is-fullheight is-default is-bold"
      data-testid="home-container"
    >
      <div className="hero-head">{props.navbar}</div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns is-vcentered">
            <div className="column is-5">
              <figure className="image is-4by3">
                <img
                  src="https://picsum.photos/800/600/?random"
                  alt="Random Image"
                />
              </figure>
            </div>
            <div className="column is-6 is-offset-1">
              <h1 className="title is-2">Make a Mental Health Plan</h1>
              <h2 className="subtitle is-4">Coming soon...</h2>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-foot">{props.footer}</div>
    </section>
  );
}

export default Home;
