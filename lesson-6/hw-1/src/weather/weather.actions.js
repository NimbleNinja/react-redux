import fetchWeatherData from './gateway';

export const SET_TOWNS = 'WEATHER/SET_TOWNS';

export const setTowns = towns => ({
  type: SET_TOWNS,
  payload: {
    towns,
  },
});

export const getWeatherData = () => dispatch => {
  fetchWeatherData().then(towns => {
    dispatch(setTowns(towns));
  });
};
