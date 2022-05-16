import { createContext, useContext, useEffect, useReducer } from "react";
import { getTask } from "../utils/updateStorage";

const initialTaskData = {
  tasks: []
};

const taskReducerFunction = (taskState, action) => {
  switch (action.type) {
    case "ADD-TASK":
      return { ...taskState, tasks: [...taskState.tasks, action.payload] };
    case "UPDATE-FROM-LOCALSTORAGE": {
      const initalTask = getTask();
      return { ...taskState, tasks: [...initalTask] };
    }
    default:
      return taskState;
  }
};

const TaskContext = createContext();

const TaskProvider = ({ children }) => {

  useEffect(() => {
    taskDispatch({type: "UPDATE-FROM-LOCALSTORAGE"});
  }, []);

  const [taskState, taskDispatch] = useReducer(
    taskReducerFunction,
    initialTaskData,
  );
  return (
    <TaskContext.Provider value={{ taskState, taskDispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

const useTask = () => useContext(TaskContext);

export { useTask, TaskProvider };
