import { useSelector } from "react-redux"
import TodoCard from "./TodoCard";
import style from "../styles/modules/app.module.scss";
import { AnimatePresence, motion } from "framer-motion";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ListContainer = () => {
  const todoList = useSelector(state => state.todo.todoList);
  const sortedTodoList = [...todoList].sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredStatus = useSelector(state => state.todo.filteredStatus);
  const filteredTodoList = sortedTodoList.filter(item => {
    if (filteredStatus === "all") return true;
    return item.status === filteredStatus;
  });

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={style.contentWrapper}
    >
      <AnimatePresence>
        {filteredTodoList && filteredTodoList.length > 0
          ? filteredTodoList.map((todo) => (
            <TodoCard
              todo={todo}
              key={todo.id}
            />
          ))
          : (
            <motion.p
              variants={child}
              className={style.emptyText}
            >
              Ahh snap... No task found!
            </motion.p>
          )}
      </AnimatePresence>
    </motion.div>
  )
}

export default ListContainer