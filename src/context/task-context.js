import { createContext, useContext, useEffect, useReducer } from "react";
import { taskReducerFunction } from "./taskReducerFunctions";

const initialTaskData = {
  tasks: [],
};

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  useEffect(() => {
    taskDispatch({ type: "UPDATE-FROM-LOCALSTORAGE" });
  }, []);

  const [taskState, taskDispatch] = useReducer(
    taskReducerFunction,
    initialTaskData
  );
  return (
    <TaskContext.Provider value={{ taskState, taskDispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

const useTask = () => useContext(TaskContext);

export { useTask, TaskProvider };
