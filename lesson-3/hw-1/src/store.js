import { createStore, combineReducers } from 'redux';
import cartReducer from './cart.reducer';
import languageReducer from './language.reducer';
import userReducer from './user.reducer';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  combineReducers({
    language: languageReducer,
    user: userReducer,
    cart: cartReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
