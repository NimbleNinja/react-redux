import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import weatherReducer from './weather/weather.reducer';

const reducer = combineReducers({
  towns: weatherReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
