import { SET_TOWNS } from './weather.actions';

const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case SET_TOWNS:
      return [...state, ...action.payload.towns];

    default:
      return state;
  }
};

export default weatherReducer;
