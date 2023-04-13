import style from "../styles/modules/profile.module.scss";
import { MdOutlineClose } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { ClickButton } from "./Button";
import { useDispatch } from "react-redux";
import { userLogout } from "../redux/slices/todoSlice";

const dropAnimate = {
    hidden: {
        opacity: 0,
        transform: 'scale(0.9)',
    },
    visible: {
        transform: 'scale(1)',
        opacity: 1,
        transition: {
            duration: 0.5,
            type: 'spring',
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        transform: 'scale(0.9)',
        opacity: 0,
    },
};

const ProfileModal = ({ user, setProfileModal, setAuthMethod }) => {
    const dispatch = useDispatch();
    const backendURL = import.meta.env.VITE_BACKEND_URL;

    const handleLogout = () => {
        setProfileModal(false);
        dispatch((userLogout(
            user
        )));
        setAuthMethod(0);
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={style.wrapper}
            >
                <motion.div
                    variants={dropAnimate}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={style.container}
                >
                    {/* Modal Close Button */}
                    <motion.div
                        initial={{ top: 40, opacity: 0 }}
                        animate={{ top: -10, opacity: 1 }}
                        exit={{ top: 40, opacity: 0 }}
                        className={style.closeBtn}
                        onClick={() => setProfileModal(false)}
                        role="button"
                    >
                        <MdOutlineClose />
                    </motion.div>
                    <div className={style.userWrapper}>
                        <div className={style.userTitle}>
                            <div className={style.userImg}>
                                <img
                                    src={`${backendURL}/${user?.avatar}`}
                                    alt={user?.name}
                                />
                            </div>
                            {user?.name}
                        </div>
                        <div className={style.credInfo}>
                            <p>Email: {user?.email}</p>
                            <p>Password: {`${user?.password[0]}........${user?.password[user?.password?.length - 1]}`}</p>
                        </div>
                        <div className={style.buttonContainer}>
                            <ClickButton
                                text="Logout"
                                variant="buttonSecondary"
                                type="button"
                                onClick={handleLogout}
                            />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default ProfileModal