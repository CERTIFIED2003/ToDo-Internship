import { format } from "date-fns";
import style from "../styles/modules/todoItem.module.scss";
import { getClasses } from "../utils/getClasses";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/slices/todoSlice";
import { toast } from "react-hot-toast";
import TodoModal from "./TodoModal";
import { useState } from "react";

const TodoCard = ({ todo }) => {
    const dispatch = useDispatch();
    const [updateModalOpen, setUpdateModalOpen] = useState(false);

    const handleDeleteTodo = () => {
        dispatch(deleteTodo(todo.id));
        toast.success("ToDo deleted 😖");
    };

    const handleEditTodo = () => {
        setUpdateModalOpen(true);
    };

    return (
        <>
            <div className={style.item}>
                <div className={style.todoDetails}>
                    [ ]
                    <div className={style.text}>
                        <p className={
                            getClasses([style.todoText,
                            todo.status === "completed" ? style["todoText--completed"]
                                : todo.status === "pending" ? style["todoText--pending"]
                                    : style["todoText--canceled"]
                            ])
                        }
                        >
                            {todo.title}
                            {` `}
                            {
                                todo.status === "completed" ? "[✔]"
                                    : todo.status === "pending" ? ""
                                        : "[✖]"
                            }
                        </p>
                        <p className={style.time}>
                            {format(new Date(todo.time), "p, dd/MM/yyyy")}
                        </p>
                    </div>
                </div>
                <div className={style.todoActions}>
                    <div
                        className={style.icon}
                        onClick={handleDeleteTodo}
                        role="button"
                    >
                        <MdDelete />
                    </div>
                    <div
                        className={style.icon}
                        onClick={handleEditTodo}
                        role="button"
                    >
                        <MdEdit />
                    </div>
                </div>
            </div>
            {updateModalOpen && (
                <TodoModal
                    type="update"
                    modalOpen={updateModalOpen}
                    setOpenModal={setUpdateModalOpen}
                    todo={todo}
                />
            )}
        </>
    )
}

export default TodoCard