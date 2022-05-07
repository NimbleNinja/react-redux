import React from 'react';
import { Provider } from 'react-redux';
import Weather from './weather/Weather';
import store from './store.js';

const App = () => (
  <Provider store={store}>
    <Weather />
  </Provider>
);

export default App;
