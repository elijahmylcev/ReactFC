import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  decrement() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>{ count }</h1>

        <button type="submit" onClick={this.increment}>Increment</button>
        <button type="submit" onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default ClassCounter;
