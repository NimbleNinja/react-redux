import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ text, done, id, updateTaskStatus, deleteTask }) => {
  const listItemClasses = `list-item ${done ? 'list-item_done' : ''}`;

  return (
    <li className={listItemClasses}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => updateTaskStatus(id)}
      />
      <span className="list-item__text">{text}</span>
      <button onClick={() => deleteTask(id)} className="list-item__delete-btn"></button>
    </li>
  );
};

export default Task;

Task.propTypes = {
  text: PropTypes.string,
  done: PropTypes.bool,
  id: PropTypes.string,
  updateTaskStatus: PropTypes.func,
  deleteTask: PropTypes.func,
};
