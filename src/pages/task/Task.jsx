import { React, useState } from "react";
import { Link } from "react-router-dom";
import { TaskHeader, TaskList, TaskForm } from "../../components/Components";
import { useTitle } from "../../utils/useTitle";
import "./task.css";

function Task() {
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState({ value: false, data: {} });
  useTitle("Tasks | TASKY");
  return (
    <div className="relative">
      <TaskHeader />
      <TaskList setShowForm={setShowForm} setIsEditing={setIsEditing} />
      {showForm && (
        <TaskForm
          setShowForm={setShowForm}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      )}
      <div className="pattern-bg"></div>
      <Link to="/">
        <button className="home-btn">
          <i className="fas fa-home"></i>
        </button>
      </Link>
    </div>
  );
}

export { Task };
