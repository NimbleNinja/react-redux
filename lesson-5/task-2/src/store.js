import { createStore, combineReducers } from 'redux';
import optionsReducer from './options/options.reducer';

const reducer = combineReducers({
  options: optionsReducer,
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
