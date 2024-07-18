import style from '../styles/Button.module.css';

const Button = (props) => {
    return (
        <button className={style.btn} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button