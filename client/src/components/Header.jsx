import { ClickButton, SelectButton } from "./Button";
import style from "../styles/modules/app.module.scss";
import TodoModal from "./TodoModal";
import { useState } from "react";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

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
      <SelectButton id="status">
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="canceled">Canceled</option>
        <option value="completed">Completed</option>
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