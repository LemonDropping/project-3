import { ButtonInterface } from '../../../types';
import { Link } from 'react-router-dom'
import styles from './styles/GameCardButton.module.css'

const GameCardButton = ({ onClick, text, filled, type, to, icon} :ButtonInterface) => {

    const filledClass= filled ? styles.filled : '';

    return (
        <Link to={to} onClick={onClick} className={`${styles.btn} uppercase ${styles[type.toLocaleLowerCase()]} ${filledClass}`}>
            <span>{text}</span>
            {icon}
        </Link>
    )
}

export default GameCardButton;