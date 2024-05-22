import { memo } from "react";
import TodoApp from "./components/todo-list/TodoApp";


const App = () => {
  return (
    <div>
      <TodoApp />
    </div>
  );
};

export default memo(App);
