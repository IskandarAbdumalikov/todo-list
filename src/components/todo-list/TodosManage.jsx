import { memo, useMemo } from "react";
import "./todo.scss";

const TodosManage = ({ data, deleteTodos, updateValus }) => {
  let total = useMemo(() => {
    return data.length;
  }, [data]);

  let todosItems = data?.map((el) => (
    <tr key={el.id}>
      <td>{el.id}</td>
      <td>{el.title}</td>
      <td>{el.text}</td>
      <td>{el.status}</td>
      <td>{el.time}</td>
      <td>
        <button className="edit__btn" onClick={() => updateValus(el)}>
          edit
        </button>
      </td>
      <td>
        <button className="delete__btn" onClick={() => deleteTodos(el.id)}>
          delete
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="todo__manager">
      <h1>
        Sizning rejalashtirgan ishlaringiz{" "}
        {total ? `soni - ${total} ta` : "yo`q"}
      </h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>TEXT</th>
            <th>STATUS</th>
            <th>TIME</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>{todosItems}</tbody>
      </table>
    </div>
  );
};

export default memo(TodosManage);
