import React, { PureComponent } from 'react';

class PureCounterComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      toggle: false,
    };
  }
  handleToggleButton = () => {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));
  };
  handleIncrementButton = () => {
    if (this.state.toggle) {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }
  };
  render() {
    console.log("This is Pure Component");
    return (
      <div>
        <h1>Pure Component</h1>
        <p>{this.state.counter}</p>
        <button onClick={this.handleToggleButton}>
          {this.state.toggle ? "Set toggle" : "Set toggle"}
        </button>
        <button onClick={this.handleIncrementButton}>Counter</button>
      </div>
    );
  }
}

export default PureCounterComponent;
