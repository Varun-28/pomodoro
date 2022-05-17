import { React, useState } from "react";
import { Link } from "react-router-dom";
import { TaskHeader, TaskList, TaskForm } from "../../components/Components";
import "./task.css";

function Task() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative">
      <TaskHeader />
      <TaskList setShowForm = {setShowForm} />
      {showForm && <TaskForm setShowForm = {setShowForm} />}
      <div className="pattern-bg"></div>
      <Link to="/"><button className="home-btn"><i className="fas fa-home"></i></button></Link>
    </div>
  );
}

export { Task };
