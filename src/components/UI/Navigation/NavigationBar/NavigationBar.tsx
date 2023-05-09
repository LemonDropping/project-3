import { Link } from 'react-router-dom'
import styles from './NavigationBar.module.css';
import { NavbarInterface } from '../../../../types';
import NavLogo from '../Logo/NavLogo'

const NavigationBar = ({ title, links, image, icon, button, }: NavbarInterface) => {
    return (
        <nav className={styles.navbar}>
            {icon && <div className={styles.icon}>{<NavLogo />}</div>}
            <div className={styles.title}>{title}</div>
            <ul className={styles.links}>
                {links && links.map((link) => (
                    <li key={link.to}>
                        <Link to={link.to}>{link.text}</Link>
                    </li>
                ))}
            </ul>
            {button && (
                <div className={styles.button}>
                    <Link to={button.to}>{button.text}</Link>
                </div>
            )}
            {image && <img src={image} alt="Banner" className={styles.image} />}
        </nav>
    )
}

export default NavigationBar;