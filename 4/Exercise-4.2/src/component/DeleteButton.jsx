import style from '../styles/DeleteButton.module.css';
import trashBinImage from '../styles/images/trash-bin.jpg'

const DeleteButton = () => {
    return <img className={style.trashBin} src={trashBinImage} alt={'bin'}></img>
};

export default DeleteButton;
