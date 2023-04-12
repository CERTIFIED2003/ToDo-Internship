// This Link module is used to navigate to other pages of our site
import { Link } from "react-router-dom";

// Importing Title's style (.scss format - Is a SAAS)
import style from "../styles/modules/title.module.scss";

const Title = ({ title }) => {
  return (
    <Link to="/">
      <div className={style.title}>
        {title}
        <img
          src="/logo.png"
          alt="logo"
          className={style.titleImg}
        />
      </div>
    </Link>
  )
}

export default Title