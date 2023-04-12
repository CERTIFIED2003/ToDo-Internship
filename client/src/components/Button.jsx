import style from "../styles/modules/button.module.scss";
import todoStyle from "../styles/modules/todoItem.module.scss";
import { getClasses } from "../utils/getClasses";
import { motion, useMotionValue, useTransform } from "framer-motion";

const ClickButton = ({ text, variant, type, ...rest }) => {
    return (
        <button
            className={getClasses([style.button, style[`${variant}`]])}
            type={type}
            {...rest}
        >
            {text}
        </button>
    )
}

const SelectButton = ({ children, ...rest }) => {
    return (
        <select
            className={getClasses([style.button, style.button__select])}
            {...rest}
        >
            {children}
        </select>
    )
}

const checkVariants = {
    initial: {
        color: "#fff",
    },
    unchecked: {
        pathLength: 0,
    },
    checked: {
        pathLength: 1,
    },
};

const boxVariants = {
    unchecked: {
        background: "var(--gray-1)",
        transition: { duration: 0.1 },
    },
    checked: {
        background: "var(--primaryPurple)",
        transition: { duration: 0.1 },
    },
};

const CheckButton = ({ checked, handleUpdateCheck }) => {
    const pathLength = useMotionValue(0);
    const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

    return (
        <motion.div
            variants={boxVariants}
            animate={checked ? "checked" : "unchecked"}
            className={todoStyle.svgBox}
            onClick={handleUpdateCheck}
        >
            <motion.svg
                className={todoStyle.svg}
                viewBox="0 0 53 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    variants={checkVariants}
                    animate={checked ? "checked" : "unchecked"}
                    style={{ pathLength, opacity }}
                    fill="none"
                    strokeMiterlimit="10"
                    strokeWidth="6"
                    d="M1.5 22L16 36.5L51.5 1"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                />
            </motion.svg>
        </motion.div>
    )
}

export { ClickButton, SelectButton, CheckButton };