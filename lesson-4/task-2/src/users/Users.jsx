import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';

class Users extends Component {
  addUserHandler = () => {
    const id = Math.round(Math.random() * 1000000);
    const newUser = {
      id,
      name: `User # ${id}`,
    };

    this.props.addUser(newUser);
  };

  render() {
    const { deleteUser, usersList } = this.props;
    return (
      <div className="users">
        <button onClick={this.addUserHandler} className="users__create-btn">
          Create user
        </button>
        <ul className="users__list">
          {usersList.map(({ id, name }) => (
            <li key={id} className="users__list-item">
              <span>{name}</span>
              <button onClick={() => deleteUser(id)} className="users__delete-btn">
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => ({
  usersList: state.users.usersList,
});

const mapDispatch = {
  addUser: usersActions.addUser,
  deleteUser: usersActions.deleteUser,
};

export default connect(mapState, mapDispatch)(Users);
