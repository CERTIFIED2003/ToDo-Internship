import style from "../styles/modules/modal.module.scss";
import { MdOutlineClose } from "react-icons/md";
import { ClickButton } from "./Button";
import { useEffect, useState } from "react";
// Used for dispatch functions
import { useDispatch } from "react-redux";
// Importing addTodo from redux directory
import { addTodo, updateTodo } from "../redux/slices/todoSlice";
// Used to generate unique keys
import { v4 as uuid } from "uuid";
// Used for Flash messages
import { toast } from "react-hot-toast";

const TodoModal = ({ type, openModal, setOpenModal, todo }) => {
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("pending");
    const dispatch = useDispatch();

    const handleCreateTask = (e) => {
        e.preventDefault();

        // If User didn't input any Title show him Error
        if (title === "") {
            toast.error("Title shouldn't be empty!");
            return;
        }
        // If User changes status to empty string by javascript from client side then show his Error
        if (status === "") {
            toast.error("Status shouldn't be empty!");
            return;
        }

        // If type= add, then create a new task
        if (type === "add") {
            dispatch(addTodo({
                id: uuid(),
                title,
                status,
                time: new Date().toLocaleString(),
            }));
            toast.success("Hurray... You created a new task!");
            setOpenModal(false);
        }

        // If type= update, then update the current task
        if (type === "update") {
            if (todo.title !== title || todo.status !== status) {
                dispatch(updateTodo({
                    ...todo,
                    title,
                    status,
                    time: new Date().toLocaleString(),
                }));
                toast.success("Yay... The task was updated!");
                setOpenModal(false);
            }
            else toast.error("No changes found!");
        }
    };

    useEffect(() => {
        if (type === "update" && todo) {
            setTitle(todo.title);
            setStatus(todo.status);
        }
        else {
            setTitle("");
            setStatus("pending");
        }
    }, [type, todo, openModal]);

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                {/* Modal Close Button */}
                <div
                    className={style.closeBtn}
                    onClick={() => setOpenModal(false)}
                    role="button"
                >
                    <MdOutlineClose />
                </div>
                {/* Add Task Form */}
                <form className={style.form} onSubmit={(e) => handleCreateTask(e)}>
                    <h1 className={style.formTitle}>
                        {type === "update" ? "Update Task" : "Create Task"}
                    </h1>
                    {/* Input for Task's Title */}
                    <label htmlFor="title">
                        Title
                        <input
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </label>
                    {/* Select for Task's Status */}
                    <label htmlFor="status">
                        Status
                        <select
                            name="status"
                            id="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="pending">Pending</option>
                            <option value="canceled">Canceled</option>
                            <option value="completed">Completed</option>
                        </select>
                    </label>
                    <div className={style.buttonContainer}>
                        <ClickButton
                            text="Close"
                            variant="buttonSecondary"
                            type="button"
                            onClick={() => setOpenModal(false)}
                            role="button"
                        />
                        <ClickButton
                            text={type === "update" ? "Update" : "Add Task"}
                            variant="buttonPrimary"
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TodoModal