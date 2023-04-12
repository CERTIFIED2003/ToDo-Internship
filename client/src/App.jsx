import style from "./styles/modules/app.module.scss";
import {
  Title,
  Header,
  ListContainer,
  Authentication
} from "./components"

const App = () => {
  return (
    <div>
      <Title title="TODO APP" />
      <div className={style.appWrapper}>
        <Header />
        <ListContainer />
      </div>
      {/* <Authentication /> */}
    </div>
  )
}

export default App
