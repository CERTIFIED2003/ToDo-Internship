import { ClickButton, SelectButton } from "./Button";
import style from "../styles/modules/app.module.scss";
import TodoModal from "./TodoModal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterStatus } from "../redux/slices/todoSlice";
import { countStatus } from "../utils/countStatus";

const Header = () => {
  const dispatch = useDispatch();
  const filteredStatus = useSelector(state => state.todo.filteredStatus);
  const [openModal, setOpenModal] = useState(false);

  const todoInfo = JSON.parse(localStorage.getItem("todoList"));
  const completed = countStatus("completed");
  const pending = countStatus("pending");
  const canceled = countStatus("canceled");

  const updateFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value));
  };

  return (
    <div className={style.appHeader}>
      {/* Button to create a To-Do List */}
      <ClickButton
        text="Create ToDo"
        variant="buttonPrimary"
        type="button"
        onClick={() => setOpenModal(true)}
      />

      {/* Select tag for displaying sorted task list based on their status ( pending, canceled, completed ) */}
      <SelectButton
        id="status"
        value={filteredStatus}
        onChange={updateFilter}
      >
        <option value="all">ALL - {todoInfo?.length}</option>
        <option value="time" className={style.time}>TIME</option>
        <option className={style.pending} value="pending">PENDING - {pending}</option>
        <option className={style.canceled} value="canceled">CANCELED - {canceled}</option>
        <option className={style.completed} value="completed">COMPLETED - {completed}</option>
      </SelectButton>

      {/* Modal to create a To-Do list's task */}
      {openModal && (
        <TodoModal
          type="add"
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  )
}

export default Header