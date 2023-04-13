import style from "./styles/modules/app.module.scss";
import {
  Title,
  Header,
  ListContainer,
  Authentication
} from "./components";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import ProfileModal from "./components/ProfileModal";
import { userAutoLogin } from "./redux/slices/todoSlice";

const App = () => {
  // Backend call at "/" for starting server if it's inactive for long duration
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  axios.get(`${backendURL}/`);

  const userInfo = useSelector(state => state.todo.user);
  const [authMethod, setAuthMethod] = useState(0);
  const [profileModal, setProfileModal] = useState(false);

  useEffect(() => {
    if (userInfo.length > 0) {
      userAutoLogin();
      setAuthMethod(2);
    }
    else {
      setAuthMethod(0);
    }
  }, [userInfo.length]);

  return (
    <>
      <div>
        <Title
          title="TODO APP"
          user={userInfo[0]}
          setProfileModal={setProfileModal}
        />
        {authMethod === 2 && (
          <div className={style.appWrapper}>
            <Header />
            <ListContainer />
          </div>
        )}
        {authMethod !== 2 && (
          <Authentication
            authMethod={authMethod}
            setAuthMethod={setAuthMethod}
          />
        )}
        {profileModal && userInfo.length > 0 && (
          <ProfileModal
            user={userInfo[0]}
            setProfileModal={setProfileModal}
            setAuthMethod={setAuthMethod}
          />
        )}
      </div>

      <Toaster
        toastOptions={{
          style: {
            fontSize: "1.4rem"
          },
          duration: 5000,
          position: "bottom-center",
        }}
      />
    </>
  )
}

export default App
