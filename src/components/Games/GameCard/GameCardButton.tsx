import { ButtonInterface } from '../../../types';
import styles from './styles/GameCardButton.module.css'

const GameCardButton = ({ text, filled, type, to, icon} :ButtonInterface) => {

    const filledClass= filled ? styles.filled : '';
    return (
        <a to={to} className={`${styles.btn} uppercase ${styles[type.toLocaleLowerCase()]} ${filledClass}`}>
            <span>{text}</span>
            {icon}
        </a>
    )
}

export default GameCardButton;