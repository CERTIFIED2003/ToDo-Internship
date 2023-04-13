import style from "../styles/modules/modal.module.scss";
import { MdOutlineClose } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

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

const ProfileModal = ({ setModalOpen }) => {
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
                        role="button"
                        onClick={() => setModalOpen(false)}
                    >
                        <MdOutlineClose />
                    </motion.div>

                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default ProfileModal