export const SET_USER = 'SET_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const setUser = userData => ({
  type: SET_USER,
  payload: {
    userData,
  },
});

export const removeUser = () => ({
  type: REMOVE_USER,
});
