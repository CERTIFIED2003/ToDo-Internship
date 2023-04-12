import { useSelector } from "react-redux"
import TodoCard from "./TodoCard";
import style from "../styles/modules/app.module.scss";

const ListContainer = () => {
  const todoList = useSelector(state => state.todo.todoList);
  const sortedTodoList = [...todoList].sort((a, b) => new Date(b.time) - new Date(a.time));

  return (
    <div className={style.contentWrapper}>
      {sortedTodoList && sortedTodoList.length > 0
        ? sortedTodoList.map((todo) => (
          <TodoCard
            todo={todo}
            key={todo.id}
          />
        ))
        : (
          "Ahh no todo"
        )}
    </div>
  )
}

export default ListContainer