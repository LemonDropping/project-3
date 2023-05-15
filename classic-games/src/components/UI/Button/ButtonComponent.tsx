import { ButtonComponentInterface } from "../../../types";
import Icon from "../Icon/IconComponent";
import styles from '../NavigationBar/NavigationBar.module.css'

const ButtonComponent = ({
  buttonText,
  buttonType,
  buttonPath,
  filled,
  buttonIcon,
  onClick
}: ButtonComponentInterface) => {
  return (
    <button type={buttonType} onClick={onClick} className={`${styles.navbarButton}`}>
      {buttonIcon && <Icon {...buttonIcon} />}
      {buttonText}
    </button>
  );
};

export default ButtonComponent;
