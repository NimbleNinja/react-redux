import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions';

const initualState = {
  usersList: [],
};

const usersReducer = (state = initualState, action) => {
  switch (action.type) {
    default:
      return state;
    case ADD_USER:
      return {
        ...state,
        usersList: [...state.usersList, action.payload.userData],
      };
    case DELETE_USER: {
      const filteredUsers = state.usersList.filter(user => user.id !== action.payload.userId);
      return {
        ...state,
        usersList: filteredUsers,
      };
    }
    case UPDATE_USER: {
      const updatedUsers = state.usersList.map(user => {
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
        usersList: updatedUsers,
      };
    }
  }
};

export default usersReducer;
