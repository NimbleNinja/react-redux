import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateTaskInput extends Component {
  state = {
    value: '',
  };

  inputValueHandler = e => {
    this.setState({
      value: e.target.value,
    });
  };

  createTaskBtnHandler = () => {
    this.props.createTask(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <div className="create-task">
        <input
          className="create-task__input"
          type="text"
          value={this.state.value}
          onChange={this.inputValueHandler}
        />
        <button onClick={this.createTaskBtnHandler} className="btn create-task__btn">
          Create
        </button>
      </div>
    );
  }
}

export default CreateTaskInput;

CreateTaskInput.propTypes = {
  createTask: PropTypes.func,
};
