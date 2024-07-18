import style from '../styles/Card.module.css'
import CardHeader from './CardHeader'

const Card = (props) => {

    return (
        <div className={style.card}>
            <CardHeader title={props.title} key={props.key}></CardHeader>
            <div>{props.content}</div>
        </div>
    )
}

export default Card