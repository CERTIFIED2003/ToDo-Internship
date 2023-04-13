import { useState } from "react";
import style from "../styles/modules/modal.module.scss";
import { ClickButton } from "./Button";
import axios from "axios";
import { toast } from "react-hot-toast";

const Login = ({ setAuthMethod }) => {
    const [email, setEmail] = useState("");
    const [password, setPassowrd] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        if (email === "" || password === "") return toast.error("Please Enter the Credentials!");
        try {
            const backendURL = import.meta.env.VITE_BACKEND_URL
            const { data } = await axios.post(`${backendURL}/login`,
                {
                    email,
                    password,
                }
            );
            console.log(data);
        }
        catch (error) {
            toast.error(error.response.data.message || "Something went wrong... Try again!");
            console.log(error.response.data);
        }
    };

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <form className={style.form} onSubmit={handleLogin}>
                    <h1 className={style.authTitle}>
                        Login
                    </h1>
                    {/* Input for User's Email */}
                    <label htmlFor="email">
                        Email
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    {/* Input for User's Password */}
                    <label htmlFor="email">
                        Password
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassowrd(e.target.value)}
                        />
                    </label>
                    <div className={style.authContainer}>
                        <ClickButton
                            text="Create Account"
                            variant="buttonSecondary"
                            type="button"
                            onClick={() => setAuthMethod(1)}
                        />
                        <ClickButton
                            text="Login"
                            variant="buttonPrimary"
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login