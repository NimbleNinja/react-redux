import { ADD_TASK, DELETE_TASK, SET_TASKS, UPDATE_TASK } from './tasks.actions';

const initialState = {
  tasksList: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS: {
      return {
        ...state,
        tasksList: [...action.payload.tasksList],
      };
    }
    case ADD_TASK: {
      return {
        ...state,
        tasksList: [...state.tasksList, action.payload.task],
      };
    }
    case UPDATE_TASK: {
      const { id, done } = action.payload.task;
      const updatedTasks = state.tasksList.map(task => {
        if (task.id === id) {
          return {
            ...task,
            done,
          };
        }

        return task;
      });
      return {
        ...state,
        tasksList: updatedTasks,
      };
    }
    case DELETE_TASK: {
      const filteredTasks = state.tasksList.filter(task => task.id !== action.payload.id);
      return {
        ...state,
        tasksList: filteredTasks,
      };
    }
    default:
      return state;
  }
};

export default tasksReducer;
