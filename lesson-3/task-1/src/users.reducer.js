import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions';

const usersReducer = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
    case ADD_USER:
      return [...state, action.payload.userData];
    case DELETE_USER: {
      const filteredUsers = state.filter(user => user.id !== action.payload.userId);
      return filteredUsers;
    }
    case UPDATE_USER: {
      const updatedUsers = state.map(user => {
        if (user.id === action.payload.userId) {
          return {
            ...user,
            ...action.payload.userData,
          };
        }
        return user;
      });

      return updatedUsers;
    }
  }
};

export default usersReducer;
