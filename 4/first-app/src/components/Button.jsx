import style from '../styles/Button.module.css';

const Button = (props) => {
  function handleClick() {
    console.log('Button clicked!');
  }

  return(
      <button className={style.btn} onClick={handleClick}>
        {props.children}
      </button>
  )

}

export default Button