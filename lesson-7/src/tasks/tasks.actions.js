import { tasksSelector } from './tasks.selectors';
import {
  deleteTaskFromServer,
  fetchTasks,
  postTaskOnServer,
  putTaskOnServer,
} from './tasksGateway';

export const SET_TASKS = 'TASKS/SET_TASKS';
export const ADD_TASK = 'TASKS/ADD_TASK';
export const DELETE_TASK = 'TASKS/DELETE_TASK';
export const UPDATE_TASK = 'TASKS/UPDATE_TASK';

export const tasksReseive = tasksList => ({
  type: SET_TASKS,
  payload: {
    tasksList,
  },
});

export const addTask = task => ({
  type: ADD_TASK,
  payload: {
    task,
  },
});

export const removeTask = id => ({
  type: DELETE_TASK,
  payload: {
    id,
  },
});

export const updateTask = task => ({
  type: UPDATE_TASK,
  payload: {
    task,
  },
});

export const getTasksList = () => dispatch => {
  fetchTasks().then(tasks => {
    dispatch(tasksReseive(tasks));
  });
};

export const createTask = text => dispatch => {
  if (!text) {
    return null;
  }

  const newTask = {
    text,
    done: false,
  };

  postTaskOnServer(newTask).then(task => {
    dispatch(addTask(task));
  });
};

export const deleteTask = id => dispatch => {
  deleteTaskFromServer(id).then(() => {
    dispatch(removeTask(id));
  });
};

export const updateTaskStatus = id => (dispatch, getState) => {
  const tasksList = [...tasksSelector(getState())];
  const task = tasksList.find(task => task.id === id);

  const taskToUpdate = {
    ...task,
    done: !task.done,
  };

  putTaskOnServer(id, taskToUpdate).then(() => {
    dispatch(updateTask(taskToUpdate));
  });
};
