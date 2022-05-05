import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as counterActions from './counter.actions';

class Counter extends Component {
  render() {
    const { counter, increment, decrement, reset } = this.props;
    return (
      <div className="counter">
        <button onClick={decrement} className="counter__button">
          -
        </button>
        <span onClick={reset} className="counter__value">
          {counter}
        </span>
        <button onClick={increment} className="counter__button">
          +
        </button>
      </div>
    );
  }
}

const mapState = state => ({
  counter: state,
});

const mapDispatch = {
  increment: counterActions.increment,
  decrement: counterActions.decrement,
  reset: counterActions.reset,
};

export default connect(mapState, mapDispatch)(Counter);
