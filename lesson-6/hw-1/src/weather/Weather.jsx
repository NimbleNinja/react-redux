import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeatherData } from './weather.reducer';

const Weather = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherData());
  }, []);

  const currentTowns = useSelector(store => store.weather);
  console.log(currentTowns);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {currentTowns.length === 0
          ? null
          : currentTowns.map(({ id, name, temperature }) => (
              <li key={id} className="city">
                <span className="city__name">{name}</span>
                <span className="city__temperature">{temperature}</span>
              </li>
            ))}
      </ul>
    </main>
  );
};

export default Weather;
