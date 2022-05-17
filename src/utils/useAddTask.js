import { v4 as uuid } from "uuid";
import { useTask } from "../context/task-context";
import { updateStorage } from "./updateStorage";

function useAddTask() {
  const { taskDispatch } = useTask();

  function addTask(currentTask) {
    const newTask = {
      id: uuid(),
      ...currentTask,
    };

    taskDispatch({ type: "ADD-TASK", payload: newTask });

    updateStorage(newTask);
  }
  return { addTask };
}

export { useAddTask };
