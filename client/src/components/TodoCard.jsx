import { format } from "date-fns";
import style from "../styles/modules/todoItem.module.scss";
import { getClasses } from "../utils/getClasses";
import { MdDelete, MdEdit, MdOutlinePendingActions } from "react-icons/md";
import { BsCheck2All } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/slices/todoSlice";
import { toast } from "react-hot-toast";
import TodoModal from "./TodoModal";
import { useEffect, useState } from "react";
import { CheckButton } from "./Button";
import { motion } from "framer-motion";

const child = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

const TodoCard = ({ todo }) => {
    const dispatch = useDispatch();
    const [updateModalOpen, setUpdateModalOpen] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleDeleteTodo = () => {
        dispatch(deleteTodo(todo.id));
        toast.success("ToDo deleted 😖");
    };

    const handleEditTodo = () => {
        setUpdateModalOpen(true);
    };

    const handleUpdateCheck = () => {
        setChecked(prev => !prev);
        dispatch(updateTodo({
            ...todo,
            status: checked ? "pending" : "completed",
            time: new Date().toLocaleString(),
        }));
    };

    useEffect(() => {
        if (todo.status === "completed") setChecked(true);
        else setChecked(false);
    }, [todo.status]);

    return (
        <>
            <motion.div
                variants={child}
                className={style.item}
            >
                <div className={style.todoDetails}>
                    <CheckButton checked={checked} handleUpdateCheck={handleUpdateCheck} />
                    <div className={style.text} onClick={handleEditTodo}>
                        <p className={
                            getClasses([style.todoText,
                            todo.status === "completed" ? style["todoText--completed"]
                                : todo.status === "pending" ? style["todoText--pending"]
                                    : style["todoText--canceled"]
                            ])
                        }
                        >
                            {todo.title}
                            {/* {` `} */}
                            {/* {
                                todo.status === "completed" ? "[✔]"
                                    : todo.status === "pending" ? ""
                                        : "[✖]"
                            } */}
                        </p>
                        <p className={style.time}>
                            {format(new Date(todo.time), "p, dd/MM/yyyy")}
                        </p>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div className={style.priority}>
                        Priority-{todo.priority}
                    </div>
                    <div className={style.status}>
                        {
                            todo.status === "completed" ? <BsCheck2All size={20} />
                                : todo.status === "pending" ? <MdOutlinePendingActions size={20} style={{ opacity: "0.65" }} />
                                    : <TfiClose size={19} />
                        }
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
            </motion.div>
            {updateModalOpen && (
                <TodoModal
                    type="update"
                    openModal={updateModalOpen}
                    setOpenModal={setUpdateModalOpen}
                    todo={todo}
                />
            )}
        </>
    )
}

export default TodoCard