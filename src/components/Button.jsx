import styles from './Button.module.css' 

const Button = ({handleClick, children, isRed}) => {

    return (
        <button 
        className={`${styles.button} ${isRed ? styles.red : ''}` } 
        onClick={handleClick}>{children}</button>
    )
}

export default Button;