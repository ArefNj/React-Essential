import image from '../styles/images/trash-bin.jpg'
import style from '../styles/DeleteButton.module.css';


function DeleteButton() {
    return <img src={image} className={style.trashBin} alt={'bin'}/>
}

export default DeleteButton;
