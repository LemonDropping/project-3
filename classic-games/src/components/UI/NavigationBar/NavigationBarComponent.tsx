import { NavigationBarComponentInterface } from "../../../types";
import Icon from "../Icon/IconComponent";
import NavigationLinksComponent from "./NavigationLinksComponent";
import Button from "../Button/ButtonComponent";
import styles from "./NavigationBar.module.css"

const NavigationBarComponent = ({
  navbarIcon,
  navbarButton,
  navbarLinks,
  navbarText
}: NavigationBarComponentInterface) => {
  return (
    <nav className={`${styles.navbar} uppercase`}  >
      {navbarIcon && <span className={`${styles.navbarIcon}`}><Icon {...navbarIcon} /></span>}
      {navbarText && <span className={`${styles.navbarText}`}>{navbarText}</span>}
      <ul className={`${styles.navbarLinks}`}>
        {navbarLinks.map((link) => (
          <li key={link.linkPath}>
          <NavigationLinksComponent  {...link} />
          </li>
        ))}
      </ul>
      {navbarButton && <Button {...navbarButton} />}
      
    </nav>
  );
};

export default NavigationBarComponent;
