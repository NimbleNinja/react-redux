import React from 'react';
import { Provider } from 'react-redux';
import SearchField from './users/SearchField';
import UserInfo from './users/UserInfo';
import store from './store';

const App = () => (
  <Provider store={store}>
    <div className="page">
      <UserInfo />
      <SearchField />
    </div>
  </Provider>
);

export default App;

// 1. create UI - all components
// 2. create store
// Provider => store => connect => actions => reducer => middleware
// 2* Add middleware
// 3. realize click show btn
// 4. realize fetchUser
