import style from "../styles/modules/button.module.scss";
import { getClasses } from "../utils/getClasses";

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

export { ClickButton, SelectButton };