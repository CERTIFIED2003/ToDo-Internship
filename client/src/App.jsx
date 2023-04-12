import style from "./styles/modules/app.module.scss";
import {
  Title,
  Header,
  ListContainer,
  Authentication
} from "./components";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <div>
        <Title title="TODO APP" />
        <div className={style.appWrapper}>
          <Header />
          <ListContainer />
        </div>
        {/* <Authentication /> */}
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
