import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Authentication = () => {
  const [authMethod, setAuthMethod] = useState(0);

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