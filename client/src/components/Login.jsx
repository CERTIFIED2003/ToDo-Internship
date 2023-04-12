import style from "../styles/modules/modal.module.scss";
import { ClickButton } from "./Button";

const Login = ({ setAuthMethod }) => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <form className={style.form}>
                    <h1 className={style.authTitle}>
                        Login
                    </h1>
                    {/* Input for User's Email */}
                    <label htmlFor="email">
                        Email
                        <input
                            id="email"
                            type="email"
                        />
                    </label>
                    {/* Input for User's Password */}
                    <label htmlFor="email">
                        Password
                        <input
                            id="password"
                            type="password"
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