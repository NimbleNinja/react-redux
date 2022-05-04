import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counter.reducer';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <button onClick={() => dispatch(decrement())} className="counter__button">
        -
      </button>
      <span className="counter__value">{count}</span>
      <button onClick={() => dispatch(increment())} className="counter__button">
        +
      </button>
    </div>
  );
};

export default Counter;
