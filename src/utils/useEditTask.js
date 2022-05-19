import { useTask } from "../context/task-context";

function useEditTask() {
  const { taskDispatch } = useTask();

  function editTask(currentTask, setIsEditing) {

    taskDispatch({ type: "EDIT-TASK", payload: currentTask });
    setIsEditing((prevValue) => ({...prevValue, value: false, data: {}}))
  }
  return { editTask };
}

export { useEditTask };
