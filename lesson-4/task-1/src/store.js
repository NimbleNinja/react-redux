import { createStore } from 'redux';
import counterReducer from './counter.reducer';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  counterReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
