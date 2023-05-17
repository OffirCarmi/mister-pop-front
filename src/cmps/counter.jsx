import React from "react";

export class Counter extends React.Component {
  state = { counter: 1 };

  changeCounter = (diff) => {
    if (diff === -1 && this.state.counter === 1) return;
    this.setState({ counter: this.state.counter + diff }, () =>
      this.props.setPrice(this.state.counter)
    );
  };

  render() {
    const { counter } = this.state;
    return (
      <div className="counter">
        <button onClick={() => this.changeCounter(-1)}>-</button>
        <p className="counter">{counter}</p>
        <button onClick={() => this.changeCounter(1)}>+</button>
      </div>
    );
  }
}
