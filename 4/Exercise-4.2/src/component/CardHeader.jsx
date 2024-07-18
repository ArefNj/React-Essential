import DeleteButton from "./DeleteButton";
import style from "../styles/CardHeader.module.css"


function CardHeader(props) {
    return (
        <div className={style.cardHeader}>
            <h2>{props.title} {props.key}</h2>
            <DeleteButton/>
        </div>);
}

export default CardHeader;
