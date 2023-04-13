import Login from "./Login";
import Signup from "./Signup";

const Authentication = ({ authMethod, setAuthMethod }) => {
  return (
    <>
      {authMethod === 0 ? (
        <Login setAuthMethod={setAuthMethod} />
      ) : (
        <Signup setAuthMethod={setAuthMethod} />
      )}
    </>
  )
}

export default Authentication