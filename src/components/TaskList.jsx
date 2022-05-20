import React from "react";
import { useTask } from "../context/task-context";
import { Link } from "react-router-dom";

function TaskList({ setShowForm, setIsEditing }) {
  const { taskState, taskDispatch } = useTask();
  const { tasks } = taskState;
  return (
    <div className="task-container w-4/5">
      <div className="task-list-header flex items-center justify-between p-6">
        <span className="text-lg font-semibold">To-Do List</span>
        <button onClick={() => setShowForm((val) => !val)}>
          <i className="text-2xl fa-solid fa-circle-plus"></i>
        </button>
      </div>
      <div className="task-list px-8 py-4">
        {tasks.map((task) => (
          <div key={task.id} className="task-item">
            <Link to={`/task/${task.id}`}>
              <span className="text-lg">{task.title}</span>
            </Link>
            <div className="task-item-btns">
              <button
                onClick={() => {
                  setIsEditing((prevValue) => ({
                    ...prevValue,
                    value: true,
                    data: task,
                  }));
                  setShowForm((val) => !val);
                }}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button
                onClick={() =>
                  taskDispatch({ type: "DELETE-TASK", payload: task.id })
                }
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { TaskList };
