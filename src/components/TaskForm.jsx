import { React, useState, useRef } from "react";
import { useAddTask } from "../utils/useAddTask.js"

function TaskForm({ setShowForm }) {
  const [error, setError] = useState({
    value: false,
    msg: "",
  });
  const title = useRef();
  const description = useRef();
  const minutes = useRef();
  const { addTask } = useAddTask();

  function addTaskHandler(e) {
    e.preventDefault();
    if (title.current.value.trim().length < 3) {
      setError((err) => ({
        ...err,
        value: true,
        msg: "title must be atleast 3 characters long !",
      }));
    } else if (description.current.value.trim().length < 10) {
      setError((err) => ({
        ...err,
        value: true,
        msg: "description must be atleast 12 characters long !",
      }));
    } else if (minutes.current.value.trim().length < 1) {
      setError((err) => ({
        ...err,
        value: true,
        msg: "Please Enter minutes !",
      }));
    } else {
      const currentTask = {
        title: title.current.value,
        description: description.current.value,
        minutes: minutes.current.value,
      };
      addTask(currentTask);
      title.current.value = "";
      description.current.value = "";
      minutes.current.value = "";
      setShowForm((val) => !val);
    }
  }

  return (
    <div className="modal-form-container">
      <div className="form-modal p-8 rounded w-4/5 md:w-2/5">
        <form onSubmit={addTaskHandler} className="flex flex-col gap-y-4">
          <input
            className="add-input"
            type="text"
            placeholder="Add Title"
            ref={title}
            onFocus={() =>
              setError((err) => ({ ...err, value: false, msg: "" }))
            }
          />
          <textarea
            className="add-input"
            placeholder="Add Description"
            ref={description}
            onFocus={() =>
              setError((err) => ({ ...err, value: false, msg: "" }))
            }
          />
          <input
            className="add-input"
            type="number"
            placeholder="Time in minutes"
            ref={minutes}
            onFocus={() =>
              setError((err) => ({ ...err, value: false, msg: "" }))
            }
          />
          {error.value && <p className="text-base">{error.msg}</p>}
          <button className="add-btn self-end">Add</button>
        </form>
        <button onClick={() => setShowForm((val) => !val)}>
          <i className="text-3xl fas fa-times-circle"></i>
        </button>
      </div>
    </div>
  );
}

export { TaskForm };
