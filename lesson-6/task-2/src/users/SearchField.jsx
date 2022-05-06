import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchUser from './gateway';
import * as usersActions from './users.actions';

class SearchField extends Component {
  state = {
    value: '',
  };

  inputChangeHandler = e => {
    this.setState({
      value: e.target.value,
    });
  };

  showUserHandler = () => {
    this.props.startSpinner();
    fetchUser(this.state.value).then(userData => {
      this.props.userDataReseive(userData);
    });
  };

  render() {
    return (
      <div className="name-form">
        <input
          value={this.state.value}
          onChange={this.inputChangeHandler}
          type="text"
          className="name-form__input"
        />
        <button onClick={this.showUserHandler} className="name-form__btn btn">
          Show
        </button>
      </div>
    );
  }
}

const mapDispatch = {
  startSpinner: usersActions.startSpinner,
  userDataReseive: usersActions.userDataReseive,
};

export default connect(null, mapDispatch)(SearchField);
