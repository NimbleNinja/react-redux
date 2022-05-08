export const tasksSelector = store => store.tasks.tasksList;

export const sortedTasksSelector = store =>
  [...store.tasks.tasksList].sort((a, b) => a.done - b.done);
