import React from "react";
import { Link, useParams } from "react-router-dom";
import { getTask } from "../../utils/updateStorage.js";
import "./singleTask.css";

function SingleTask() {
  const { taskId } = useParams();
  const taskData = getTask();
  const currentTask = taskData.find((task) => task.id === taskId);
  return (
    <div className="p-4 single-task-page">
      <div className="mb-4 flex gap-4">
        <Link to="/task">
          <button className="hero-btn px-4 py-2"><i className="fas fa-arrow-left"></i> Back To Tasks</button>
        </Link>
        <Link to="/">
          <button className="hero-btn px-4 py-2"><i className="fas fa-home"></i> Home</button>
        </Link>
      </div>
      <div className="single-task-container">
        <div className="flex flex-col items-center justify-center">
          Stopwatch
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-3xl underline">{currentTask.title}</h3>
          <p className="text-lg">{currentTask.description}</p>
        </div>
      </div>
    </div>
  );
}

export { SingleTask };
