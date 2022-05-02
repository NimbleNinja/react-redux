import { createStore } from 'redux';

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';

export const incrementAction = {
  type: INCREMENT,
};

export const decrementAction = {
  type: DECREMENT,
};

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    default:
      return state;
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
  }
};

export const store = createStore(counterReducer);