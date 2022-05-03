import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions';

const initualState = {
  users: [],
};

const usersReducer = (state = initualState, action) => {
  switch (action.type) {
    default:
      return state;
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload.userData],
      };
    case DELETE_USER: {
      const filteredUsers = state.users.filter(user => user.id !== action.payload.userId);
      return {
        ...state,
        users: filteredUsers,
      };
    }
    case UPDATE_USER: {
      const updatedUsers = state.users.map(user => {
        if (user.id === action.payload.userId) {
          return {
            ...user,
            ...action.payload.userData,
          };
        }
        return user;
      });

      return {
        ...state,
        users: updatedUsers,
      };
    }
  }
};

export default usersReducer;
