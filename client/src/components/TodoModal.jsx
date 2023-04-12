import style from "../styles/modules/modal.module.scss";
import { MdOutlineClose } from "react-icons/md";
import { ClickButton } from "./Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";
import { v4 as uuid } from "uuid";

const TodoModal = ({ setOpenModal }) => {
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("pending");
    const dispatch = useDispatch() ;

    const handleCreateTask = (e) => {
        e.preventDefault();
        
        if (title && status) {
            dispatch(addTodo({
                id: uuid(),
                title,
                status,
                time: new Date().toLocaleDateString(),
            }));
        }
    };

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
                        Create Task
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
                            text="Add Task"
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