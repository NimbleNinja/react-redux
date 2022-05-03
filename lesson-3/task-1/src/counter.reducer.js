import { DECREMENT, INCREMENT, RESET } from './counter.actions';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    default:
      return state;
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
  }
};

export default counterReducer;
