import { ADD_USER, DELETE_USER } from './users.actions';

const initualState = {
  usersList: [],
};

const usersReducer = (state = initualState, action) => {
  switch (action.type) {
    default:
      return state;
    case ADD_USER:
      return {
        usersList: [...state.usersList, action.payload.userData],
      };
    case DELETE_USER: {
      const filteredUsers = state.usersList.filter(user => user.id !== action.payload.userId);
      return {
        usersList: filteredUsers,
      };
    }
  }
};

export default usersReducer;
