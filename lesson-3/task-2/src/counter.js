import { createStore } from 'redux';

export const INCREMENT = 'COUNTER/INCREMENT';
export const DECREMENT = 'COUNTER/DECREMENT';

export const increment = () => ({
  type: INCREMENT,
});
export const decrement = () => ({
  type: DECREMENT,
});

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    default:
      return state;
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
  }
};

/* eslint-disable no-underscore-dangle */
export const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */
