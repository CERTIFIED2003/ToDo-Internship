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

const App = () => {
  const userInfo = useSelector(state => state.todo.user);
  const [authMethod, setAuthMethod] = useState(0);

  useEffect(() => {
    if (userInfo.length > 0) {
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
      </div>

      <Toaster
        toastOptions={{
          style: {
            fontSize: "1.4rem"
          },
          duration: 5000
        }}
      />
    </>
  )
}

export default App
