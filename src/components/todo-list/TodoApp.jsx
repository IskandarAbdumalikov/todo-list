import { memo, useState, useCallback, useEffect } from "react";
import TodosCreate from "./TodosCreate";
import TodosManage from "./TodosManage";

let initialState = {
  id: null,
  title: "",
  text: "",
  status: "Important",
  time: "",
};

const TodoApp = () => {
  const [formData, setFormData] = useState(initialState);
  const [data, setData] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(data));
  }, [data]);

  let createTodos = useCallback((todos) => {
    setData((prev) => [...prev, todos]);
    setFormData(initialState);
  }, []);

  let deleteTodos = useCallback(
    (id) => {
      if (confirm("Are you sure")) {
        let filterData = data?.filter((el) => el.id !== id);
        setData(filterData);
      }
    },
    [data]
  );

  let updateTodos = useCallback(
    (payload) => {
      let index = data?.findIndex((el) => el.id === payload.id);
      data?.splice(index, 1, payload);
      setData([...data]);
      setFormData(initialState);
    },
    [data]
  );

  let getValue = useCallback((payload) => {
    setFormData((p) => ({ ...p, ...payload }));
  }, []);

  let updateValus = useCallback((payload) => {
    setFormData(payload);
  }, []);

  return (
    <div className="container todo__main">
      <h2>To do App</h2>
      <TodosCreate
        formData={formData}
        createTodos={createTodos}
        updateTodos={updateTodos}
        getValue={getValue}
      />
      <TodosManage
        updateValus={updateValus}
        deleteTodos={deleteTodos}
        data={data}
      />
    </div>
  );
};

export default memo(TodoApp);
