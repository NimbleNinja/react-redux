import { combineReducers, createStore } from 'redux';
import usersReducer from './users/users.reducer';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  combineReducers({
    users: usersReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
