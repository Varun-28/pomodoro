import { v4 as uuid } from "uuid";
import { useTask } from "../context/task-context";

function useAddTask() {
  const { taskDispatch } = useTask();

  function addTask(currentTask) {
    const newTask = {
      id: uuid(),
      ...currentTask,
    };

    taskDispatch({ type: "ADD-TASK", payload: newTask });
  }
  return { addTask };
}

export { useAddTask };
