import { useState } from "react";
import style from "../styles/modules/modal.module.scss";
import { ClickButton } from "./Button";
import { toast } from "react-hot-toast";

const Signup = ({ setAuthMethod }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [avatar, setAvatar] = useState();

    const handleCheckPassword = (e) => {
        setConfirmPassword(e.target.value)
        if(confirmPassword === password) toast.success("Password Matched");
    } 

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <form className={style.form}>
                    <h1 className={style.authTitle}>
                        Create your Account
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
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    {/* Input for Re-confirming User's Password */}
                    <label htmlFor="confirmPassword">
                        Retype Password
                        <input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={handleCheckPassword}
                        />
                    </label>
                    {/* Input for User's Avatar */}
                    <label htmlFor="avatar">
                        Avatar
                        <input
                            id="avatar"
                            type="file"
                        />
                    </label>
                    <div className={style.authContainer}>
                        <ClickButton
                            text="Already have an account?"
                            variant="buttonSecondary"
                            type="button"
                            onClick={() => setAuthMethod(0)}
                        />
                        <ClickButton
                            text="Create"
                            variant="buttonPrimary"
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup