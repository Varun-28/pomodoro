export function getTask() {
  return (JSON.parse(localStorage.getItem("tasks")) ?? []);
}

export function updateStorage(task) {
  const tasks = getTask();

  const updatedTasks = [...tasks, task];

  localStorage.setItem("tasks", JSON.stringify(updatedTasks));

  return updatedTasks;
}
