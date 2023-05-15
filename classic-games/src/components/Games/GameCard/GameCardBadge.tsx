// Importing the BadgeInterface from the root
import { BadgeInterface } from '../../../types';

// Importing the styles from the GameCardBadge module css file
import styles from './styles/GameCardBadge.module.css';

// Defining the GameCardBadge component and passing the BadgeInterface as props
const GameCardBadge = ({ text, filled } :BadgeInterface) => {

    // Creating a variable to add the 'filled' class conditionally based on the filled prop
    const filledClass= filled ? styles.filled : '';

    // Rendering the GameCardBadge component with the appropriate classnames and text
    return (
        <small className={`${styles.badge} uppercase ${filledClass}`}>{text}</small>
    )
}

// Exporting the GameCardBadge component as default
export default GameCardBadge;