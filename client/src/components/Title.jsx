// This Link module is used to navigate to other pages of our site
import { Link } from "react-router-dom";

// Importing Title's style (.scss format - Is a SAAS)
import style from "../styles/modules/title.module.scss";
import ProfileModal from "./ProfileModal";
import { useState } from "react";

const Title = ({ title, user }) => {
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Link to="/">
        <div className={style.title}>
          <div className={style.wrapper}>
            {title}
            {user ? (
              <div
                className={style.userInfo}
                onClick={() => setModalOpen(true)}
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
      </Link>
      {modalOpen && <ProfileModal setModalOpen={setModalOpen} />}
    </>
  )
}

export default Title