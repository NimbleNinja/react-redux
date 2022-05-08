import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import CreateTaskInput from '../CreateTaskInput';
import * as tasksActions from './tasks.actions';
import { sortedTasksSelector } from './tasks.selectors';

const TasksList = ({ getTasksList, tasksList, createTask, updateTaskStatus, deleteTask }) => {
  useEffect(() => {
    getTasksList();
  }, []);

  return (
    <main className="todo-list">
      <CreateTaskInput createTask={createTask} />
      <ul className="list">
        {tasksList.map(task => (
          <Task
            updateTaskStatus={updateTaskStatus}
            deleteTask={deleteTask}
            key={task.id}
            {...task}
          />
        ))}
      </ul>
    </main>
  );
};

const mapState = store => ({
  tasksList: sortedTasksSelector(store),
});

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
  createTask: tasksActions.createTask,
  deleteTask: tasksActions.deleteTask,
  updateTaskStatus: tasksActions.updateTaskStatus,
};

export default connect(mapState, mapDispatch)(TasksList);
