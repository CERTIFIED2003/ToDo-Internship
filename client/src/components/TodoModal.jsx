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
// Used for Animating various html tags
import { AnimatePresence, motion } from "framer-motion";

const dropAnimate = {
    hidden: {
        opacity: 0,
        transform: 'scale(0.9)',
    },
    visible: {
        transform: 'scale(1)',
        opacity: 1,
        transition: {
            duration: 0.5,
            type: 'spring',
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        transform: 'scale(0.9)',
        opacity: 0,
    },
};

const TodoModal = ({ type, openModal, setOpenModal, todo }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState(1);
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
                description,
                priority,
                status,
                time: new Date().toLocaleString(),
            }));
            toast.success("Hurray... You created a new task!");
            setOpenModal(false);
        }

        // If type= update, then update the current task
        if (type === "update") {
            if (todo.title !== title || todo.description !== description || todo.status !== status || todo.priority !== priority) {
                dispatch(updateTodo({
                    ...todo,
                    title,
                    description,
                    priority,
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
            setDescription(todo.description);
            setPriority(todo.priority);
            setStatus(todo.status);
        }
        else {
            setTitle("");
            setDescription("");
            setPriority(1);
            setStatus("pending");
        }
    }, [type, todo, openModal]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={style.wrapper}
            >
                <motion.div
                    variants={dropAnimate}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={style.container}
                >
                    {/* Modal Close Button */}
                    <motion.div
                        initial={{ top: 40, opacity: 0 }}
                        animate={{ top: -10, opacity: 1 }}
                        exit={{ top: 40, opacity: 0 }}
                        className={style.closeBtn}
                        onClick={() => setOpenModal(false)}
                        role="button"
                    >
                        <MdOutlineClose />
                    </motion.div>
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
                        {/* Input for Task's Description */}
                        <label htmlFor="desc">
                            Description
                            <input
                                id="desc"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </label>
                        {/* Select for Priority */}
                        <label htmlFor="priority">
                            Priority
                            <select
                                name="priority"
                                id="priority"
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                                    <option value={item} key={index}>{item}</option>
                                ))}
                            </select>
                        </label>
                        {/* Select for Task's Status */}
                        <label htmlFor="status">
                            Status
                            <select
                                name="status"
                                id="status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className={style.selectTag}
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
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default TodoModal