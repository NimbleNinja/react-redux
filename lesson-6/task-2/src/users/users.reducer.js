import { USER_DATA_RESEIVE, START_SPINNER } from './users.actions';

const initialState = {
  userData: null,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_SPINNER: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case USER_DATA_RESEIVE: {
      return {
        ...state,
        userData: action.payload.userData,
        isFetching: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
