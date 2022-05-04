import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <button className="counter__button">-</button>
        <span className="counter__value">17</span>
        <button className="counter__button">+</button>
      </div>
    );
  }
}

export default Counter;
