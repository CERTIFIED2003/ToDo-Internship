import style from "../styles/modules/modal.module.scss";
import { MdOutlineClose } from "react-icons/md";

const AuthModal = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <form>
          <h1 className={style.authTitle}>
            Login/Signup
          </h1>
        </form>
      </div>
    </div>
  )
}

export default AuthModal