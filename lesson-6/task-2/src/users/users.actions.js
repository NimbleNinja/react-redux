export const START_SPINNER = 'USERS/START_SPINNER';
export const STOP_SPINNER = 'USERS/STOP_SPINNER';
export const USER_DATA_RESEIVE = 'USERS/USER_DATA_RESEIVE';

export const startSpinner = () => ({
  type: START_SPINNER,
});

export const stopSpinner = () => ({
  type: STOP_SPINNER,
});

export const userDataReseive = userData => ({
  type: USER_DATA_RESEIVE,
  payload: {
    userData,
  },
});
