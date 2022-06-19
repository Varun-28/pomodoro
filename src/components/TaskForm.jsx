import { React, useEffect, useState } from "react";
import { useAddTask } from "../utils/useAddTask.js";
import { useEditTask } from "../utils/useEditTask.js";
import { v4 as uuidv4 } from "uuid";

function TaskForm({ setShowForm, isEditing, setIsEditing }) {
  const [error, setError] = useState({
    value: false,
    msg: "",
  });
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    minutes: "",
    tags: [],
  });
  const { addTask } = useAddTask();
  const { editTask } = useEditTask();
  //useState for storing current tag
  const [tag, setTag] = useState("");

  // delete tags function
  function handleTagDelete(id) {
    setFormData((val) => ({
      ...val,
      tags: val.tags.filter((currTag) => currTag.id !== id),
    }));
  }

  // add tags function
  function handleTagAdd(e) {
    if (e.keyCode === 32 && tag.trim().length !== 0) {
      const newTag = {
        id: uuidv4(),
        name: tag,
      };
      setFormData((val) => ({ ...val, tags: [...val.tags, newTag] }));
      setTag("");
    }
  }

  useEffect(() => {
    if(isEditing.value){
      setFormData((val) => ({
        ...val,
        title: isEditing.data.title,
        description: isEditing.data.description,
        minutes: isEditing.data.minutes,
        tags: isEditing.data.tags
      }));
    }else{
      setFormData({
        title: "",
        description: "",
        minutes: "",
        tags: [],
      });
    }
  }, [isEditing]);

  function addTaskHandler(e) {
    e.preventDefault();
    if (formData.title.trim().length < 3) {
      setError((err) => ({
        ...err,
        value: true,
        msg: "title must be atleast 3 characters long!",
      }));
    } else if (formData.description.trim().length < 10) {
      setError((err) => ({
        ...err,
        value: true,
        msg: "description must be atleast 12 characters long!",
      }));
    } else if (formData.minutes.trim().length < 1) {
      setError((err) => ({
        ...err,
        value: true,
        msg: "Please Enter minutes !",
      }));
    } else {
      if (isEditing.value) {
        editTask({ ...formData, id: isEditing.data.id }, setIsEditing);
      } else {
        addTask({ ...formData });
      }
      setFormData({
        title: "",
        description: "",
        minutes: "",
        tags: [],
      });
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
            value={formData.title}
            onChange={(e) =>
              setFormData((val) => ({ ...val, title: e.target.value }))
            }
            onFocus={() =>
              setError((err) => ({ ...err, value: false, msg: "" }))
            }
          />
          <textarea
            className="add-input"
            placeholder="Add Description"
            value={formData.description}
            onChange={(e) =>
              setFormData((val) => ({ ...val, description: e.target.value }))
            }
            onFocus={() =>
              setError((err) => ({ ...err, value: false, msg: "" }))
            }
          />
          <input
            className="add-input"
            type="number"
            placeholder="Time in minutes"
            value={formData.minutes}
            onChange={(e) =>
              setFormData((val) => ({ ...val, minutes: e.target.value }))
            }
            onFocus={() =>
              setError((err) => ({ ...err, value: false, msg: "" }))
            }
          />
          <input
            type="text"
            id="tag-field"
            className="add-input tag-field"
            placeholder="Press Space after entering Tags"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            onKeyDown={handleTagAdd}
          />
          <p>press space to enter tags</p>
          <div className="tags-section">
            {formData.tags.length !== 0 &&
              formData.tags.map(({ id, name }) => (
                <span className="tag" key={id}>
                  {name}
                  <button
                    className="tag-delete-btn"
                    onClick={() => handleTagDelete(id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </span>
              ))}
          </div>
          {error.value && <p className="text-base">{error.msg}</p>}
          <button className="add-btn self-end">
            {isEditing.value ? "Update" : "Add"}
          </button>
        </form>
        <button onClick={() => setShowForm((val) => !val)}>
          <i className="text-3xl fas fa-times-circle"></i>
        </button>
      </div>
    </div>
  );
}

export { TaskForm };
