import { DELETE_USER, ADD_USER } from './users.actions';

const defaultState = {
  usersList: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;

    case ADD_USER:
      return {
        usersList: [...state.usersList, action.user],
      };

    case DELETE_USER:
      return {
        usersList: state.usersList.filter(user => user.id !== action.id),
      };
  }
};
