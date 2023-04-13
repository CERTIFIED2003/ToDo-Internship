import { useState } from "react";
import style from "../styles/modules/modal.module.scss";
import { ClickButton } from "./Button";
import { toast } from "react-hot-toast";
import axios from "axios";

const Signup = ({ setAuthMethod }) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
    };

    const handleCreateAccount = async (e) => {
        e.preventDefault();
        if (!email || !name || !password || !confirmPassword || !avatar) return toast.error("Please fill in the complete form!");
        if (password !== confirmPassword) return toast.error("Password doesn't match!");
        setLoading(true);
        const backendURL = import.meta.env.VITE_BACKEND_URL;

        const config = { headers: { "Content-Type": "multipart/form-data" } };

        const user = await axios.post(`${backendURL}/signup`,
            {
                email: email,
                name: name,
                password: password,
                file: avatar,
            }, config
        )
            .then((res) => {
                toast.success("Yay... Account created Successfully!")
                setEmail("");
                setName("");
                setPassword("");
                setAvatar(null);
                setAuthMethod(0);
            })
            .catch((err) => {
                toast.error(err.response.data.message);
            })
            .finally(() => {
                setLoading(false);
            });
        console.log(user);
    }

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <form className={style.form} onSubmit={handleCreateAccount}>
                    <h1 className={style.authTitle}>
                        Create your Account
                    </h1>
                    <hr />
                    {/* Input for User's Email */}
                    <label htmlFor="email">
                        Email
                        <input
                            id="email"
                            type="email"
                            value={email}
                            placeholder="Enter Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    {/* Input for User's Name */}
                    <label htmlFor="name">
                        Your Full Name
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    {/* Input for User's Password */}
                    <label htmlFor="email">
                        Your Password
                        <input
                            id="password"
                            type="password"
                            value={password}
                            placeholder="Enter Password"
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
                            placeholder="Enter Password again"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </label>
                    {/* Input for User's Avatar */}
                    <label htmlFor="file-input">
                        Your Avatar
                        {!avatar && (
                            <input
                                type="file"
                                multiple={false}
                                name="avatar"
                                id="file-input"
                                accept=".jpg,.jpeg,.png"
                                onChange={handleFileUpload}
                            />
                        )}
                    </label>

                    <div className={style.avatarContainer}>
                        {avatar && (
                            <>
                                <img
                                    src={URL.createObjectURL(avatar)}
                                    alt="avatar"
                                />
                                <button type="button" onClick={() => setAvatar(null)}>
                                    <h1>Remove Avatar</h1>
                                </button>
                            </>
                        )}
                    </div>
                    <div className={style.authContainer}>
                        <ClickButton
                            text="Log In"
                            variant="buttonSecondary"
                            type="button"
                            onClick={() => setAuthMethod(0)}
                        />
                        <ClickButton
                            text={loading ? "Creating..." : "Create"}
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

export default Signup