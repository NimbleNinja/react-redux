import { SET_LANG } from './language.actions';

const languageReducer = (state = 'en', action) => {
  switch (action.type) {
    case SET_LANG:
      return action.payload.lang;
    default:
      return state;
  }
};

export default languageReducer;
