import { createStore } from 'redux';

export const increment = () => ({ type: 'COUNTER/INCREMENT' });

export const decrement = () => ({ type: 'COUNTER/DECREMENT' });

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    default:
      return state;
    case 'COUNTER/INCREMENT':
      return state + 1;
    case 'COUNTER/DECREMENT':
      return state - 1;
  }
};

export const store = createStore(counterReducer);
