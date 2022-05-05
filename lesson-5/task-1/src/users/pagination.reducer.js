import { GO_NEXT, GO_PREV } from './pagination.actions';
import users from './users';

const initualState = {
  users: {
    usersList: users,
    currentPage: 0,
  },
};

const paginationReducer = (state = initualState, action) => {
  switch (action.type) {
    case GO_NEXT:
      return {
        users: {
          ...state.users,
          currentPage: state.users.currentPage + 1,
        },
      };
    case GO_PREV:
      return {
        users: {
          ...state.users,
          currentPage: state.users.currentPage - 1,
        },
      };
    default:
      return state;
  }
};

export default paginationReducer;
