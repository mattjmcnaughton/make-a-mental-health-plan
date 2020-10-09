import axios from 'axios';
import React from 'react';

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
        <label htmlFor="username">username</label>
        <input id="username" name="username" type="text" />

        <button data-testid={buttonTestId} disabled={this.state.submitted}>Submit</button>
      </form>
    );
  }
}

function App(props) {
  return (
    <div>
      <h1>make-a-mental-health-plan</h1>
      <MentalHealthPlanControl />
    </div>
  );
}

export default App;