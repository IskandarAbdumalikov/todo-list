import { memo } from "react";
import "./todo.scss";

const TodosCreate = ({ updateTodos, formData, getValue, createTodos }) => {
  const handleCreateTodos = (e) => {
    e.preventDefault();
    if (formData.id) {
      updateTodos(formData);
    } else {
      let date = new Date();
      formData.id = date.getTime();
      createTodos(formData);
    }
  };
  return (
    <form className="todo__form" onSubmit={handleCreateTodos}>
      <input
        required
        placeholder="Enter title"
        value={formData.title}
        onChange={(e) => getValue({ title: e.target.value })}
        type="text"
      />
      <input
        required
        placeholder="Enter text"
        value={formData.text}
        onChange={(e) => getValue({ text: e.target.value })}
        type="text"
      />

      <select
        required
        placeholder="Enter status"
        value={formData.status}
        onChange={(e) => getValue({ status: e.target.value })}
        name=""
        id=""
      >
        
        <option className="important" value="Important">
          Important
        </option>
        <option className="moderately" value="Moderately important">
          Moderately important
        </option>
        <option className="unnecessary" value="Unnecessary">
          Unnecessary
        </option>
      </select>
      <input
        required
        placeholder="Enter time"
        value={formData.time}
        onChange={(e) => getValue({ time: e.target.value })}
        type="text"
      />
      <button>{formData.id ? "save" : "create"}</button>
    </form>
  );
};

export default memo(TodosCreate);
