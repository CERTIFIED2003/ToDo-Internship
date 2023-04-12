import style from "../styles/modules/modal.module.scss";
import { MdOutlineClose } from "react-icons/md";
import { ClickButton } from "./Button";

const TodoModal = ({ setOpenModal }) => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                {/* Modal Close Button */}
                <div
                    className={style.closeBtn}
                    onClick={() => setOpenModal(false)}
                >
                    <MdOutlineClose />
                </div>
                {/* Add Task Form */}
                <form className={style.form}>
                    <h1 className={style.formTitle}>
                        Create Task
                    </h1>
                    {/* Input for Task's Title */}
                    <label htmlFor="title">
                        Title
                        <input
                            id="title"
                        />
                    </label>
                    {/* Select for Task's Status */}
                    <label htmlFor="status">
                        Status
                        <select
                            name="status"
                            id="status"
                        >
                            <option value="pending">Pending</option>
                            <option value="canceled">Canceled</option>
                            <option value="completed">Completed</option>
                        </select>
                    </label>
                    <div className={style.buttonContainer}>
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