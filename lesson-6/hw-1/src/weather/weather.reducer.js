import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchWeatherData from './gateway';

const SET_TOWNS = 'WEATHER/SET_TOWNS';

export const getWeatherData = createAsyncThunk(SET_TOWNS, () => fetchWeatherData());

const weatherSlice = createSlice({
  name: 'weather',
  initialState: [],
  extraReducers(builder) {
    builder.addCase(getWeatherData.fulfilled, (state, action) => [...state, ...action.payload]);
  },
});

export default weatherSlice.reducer;
