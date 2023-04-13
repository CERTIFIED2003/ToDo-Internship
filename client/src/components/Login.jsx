import { useState } from "react";
import style from "../styles/modules/modal.module.scss";
import { ClickButton } from "./Button";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/slices/todoSlice";

const Login = ({ setAuthMethod }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassowrd] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        if (email === "" || password === "") return toast.error("Please Enter the Credentials!");
        setLoading(true);
        try {
            const backendURL = import.meta.env.VITE_BACKEND_URL;
            const { data } = await axios.post(`${backendURL}/login`,
                {
                    email,
                    password,
                }
            ); console.log(data);
            toast.success("Login Successfull!");
            setAuthMethod(2);
            dispatch(userLogin({
                id: data.id,
                email: data.email,
                name: data.name,
                password: data.password,
                avatar: data.avatar,
            }));
        }
        catch (error) {
            toast.error(error.response.data.message || "Something went wrong... Try again!");
            console.log(error.response.data);
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <form className={style.form} onSubmit={handleLogin}>
                    <h1 className={style.authTitle}>
                        Login
                    </h1>
                    <hr />
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
                            text="New here?"
                            variant="buttonSecondary"
                            type="button"
                            onClick={() => setAuthMethod(1)}
                        />
                        <ClickButton
                            text={loading ? "Wait" : "Login"}
                            variant="buttonPrimary"
                            type="submit"
                            disabled={loading}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login