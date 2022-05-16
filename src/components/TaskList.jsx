import React from "react";
import { useTask } from "../context/task-context";

function TaskList({ setShowForm }) {
  const { taskState } = useTask();
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
      {
        tasks.map((task) => 
        <div key={task.id} className="task-item">
          <span className="text-lg">{task.title}</span>
          <div className="task-item-btns">
            <button>
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button>
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
        )
      }
      </div>
    </div>
  );
}

export { TaskList };
