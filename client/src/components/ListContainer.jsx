import { useSelector } from "react-redux"
import TodoCard from "./TodoCard";
import style from "../styles/modules/app.module.scss";

const ListContainer = () => {
  const todoList = useSelector(state => state.todo.todoList);
  const sortedTodoList = [...todoList].sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredStatus = useSelector(state => state.todo.filteredStatus);
  const filteredTodoList = sortedTodoList.filter(item => {
    if (filteredStatus === "all") return true;
    return item.status === filteredStatus;
  });

  return (
    <div className={style.contentWrapper}>
      {filteredTodoList && filteredTodoList.length > 0
        ? filteredTodoList.map((todo) => (
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