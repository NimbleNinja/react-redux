import { combineReducers, createStore } from 'redux';
import counterReducer from './counter.reducer';
import usersReducer from './users.reducer';

const store = createStore(
  combineReducers({
    counter: counterReducer,
    users: usersReducer,
  }),
);

export default store;
