import { getTask, updateStorage } from "../utils/updateStorage";

export const taskReducerFunction = (taskState, action) => {
    switch (action.type) {
      case "ADD-TASK": {
        const updatedTasks = {
          ...taskState,
          tasks: [...taskState.tasks, action.payload],
        };
        updateStorage(updatedTasks.tasks);
        return updatedTasks;
      }
      case "DELETE-TASK": {
        const updatedTasks = {
          ...taskState,
          tasks: taskState.tasks.filter((task) => task.id !== action.payload),
        };
        updateStorage(updatedTasks.tasks);
        return updatedTasks;
      }
      case "EDIT-TASK": {
        const updatedTasks = {
          ...taskState,
          tasks: taskState.tasks.map((task) =>
            task.id === action.payload.id
              ? {
                  ...task,
                  title: action.payload.title,
                  description: action.payload.description,
                  minutes: action.payload.minutes,
                }
              : task
          ),
        };
        updateStorage(updatedTasks.tasks);
        return updatedTasks;
      }
      case "UPDATE-FROM-LOCALSTORAGE": {
        const initalTask = getTask();
        return { ...taskState, tasks: [...initalTask] };
      }
      default:
        return taskState;
    }
  };