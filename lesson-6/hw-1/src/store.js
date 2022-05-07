import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weather/weather.reducer';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export default store;
