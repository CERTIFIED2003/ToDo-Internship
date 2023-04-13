import { ClickButton, SelectButton } from "./Button";
import style from "../styles/modules/app.module.scss";
import TodoModal from "./TodoModal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterStatus } from "../redux/slices/todoSlice";

const Header = () => {
  const dispatch = useDispatch();
  const filteredStatus = useSelector(state => state.todo.filteredStatus);

  const [openModal, setOpenModal] = useState(false);

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
        <option value="all">ALL</option>
        <option value="time" className={style.time}>TIME</option>
        <option className={style.pending} value="pending">PENDING</option>
        <option className={style.canceled} value="canceled">CANCELED</option>
        <option className={style.completed} value="completed">COMPLETED</option>
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