// This Link module is used to navigate to other pages of our site
import { Link } from "react-router-dom";

// Importing Title's style (.scss format - Is a SAAS)
import style from "../styles/modules/title.module.scss";

const Title = ({ title, user, setProfileModal }) => {
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  return (
    <div className={style.title}>
      <div className={style.wrapper}>
        <Link to="/">{title}</Link>
        {user ? (
          <div
            className={style.userInfo}
            onClick={() => setProfileModal(true)}
          >
            <img
              src={`${backendURL}/${user.avatar}`}
              alt="logo"
              className={style.titleImg}
            />
            <p className={style.userName}>
              {user.name}
            </p>
          </div>
        ) : (
          <img
            src="/logo.png"
            alt="logo"
            className={style.titleImg}
          />
        )}
      </div>
    </div>
  )
}

export default Title