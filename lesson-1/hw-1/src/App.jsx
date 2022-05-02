import React, { Component } from 'react';
import Header from './Header';
import { userContext } from './user-context';

class App extends Component {
  state = {
    userData: { name: 'Nikola Tesla', avatar_url: 'https://avatars3.githubusercontent.com/u10001' },
  };

  render() {
    return (
      <div className="page">
        <userContext.Provider value={this.state.userData}>
          <Header />
        </userContext.Provider>
      </div>
    );
  }
}

export default App;
