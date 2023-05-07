// import CardInterface from types file
import { CardInterface } from '../../../types';

// import css styles
import styles from './styles/GameCard.module.css'

// import GameCardBadge and GameCardButton components
import GameCardBadge from './GameCardBadge';
import GameCardButton from './GameCardButton';

// create GameCard functional component that destructures props
const GameCard = ({ body, btn, title, badge, image, indicator, subtitle }: CardInterface) => {
    return (
        // set up article element with classes from styles and stack-lg
        <article className={`stack-lg ${styles.card}`}>
            {indicator && 
                // if indicator prop is passed, render small element with indicator style class
                <small className={styles.indicator}>
                    {indicator}
                </small>
            }
            {badge && 
                // if badge prop is passed, render GameCardBadge component with text and filled props
                <GameCardBadge text={badge.text} filled={badge.filled}/>
            }
            {image && 
                // if image prop is passed, render img element with src and alt attributes, and image style class
                <img src={image} alt="Random Image" className={styles.image} />
            }
            <div className="stack-sm">
                <h3 className={`${styles.title} uppercase`}>{title}</h3>
                {subtitle && 
                    // if subtitle prop is passed, render small element with subtitle style class
                    <small className={styles.subtitle}>{subtitle}</small>
                }
            </div>
            <p className={`${styles.body}`}>{body}</p>
            <GameCardButton 
                // pass props to GameCardButton component
                filled={btn.filled}
                type={btn.type}
                text={btn.text}
                to={btn.to}
                icon={btn.icon}
            />
        </article> 
    )
}

// export GameCard component as default
export default GameCard;