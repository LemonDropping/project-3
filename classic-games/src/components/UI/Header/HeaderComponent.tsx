import { HeaderInterface } from "../../../types";
import BannerImage from "../BannerImage/BannerImageComponent";
import Button from "../Button/ButtonComponent";
import Icon from "../Icon/IconComponent";
import Badge from "../Badge/BadgeComponent";
import NavigationBar from "../NavigationBar/NavigationBarComponent";


// Destructure `HeaderInterface` and store its reference value as `HeaderComponent`.
const HeaderComponent = ({
  headerImage,
  headerButton,
  headerBadge,
  headerIcon,
  navbar
}: HeaderInterface) => {
  return (
    // Use the props and pass appropriate component and use the spread operator to spread out the references to each components props.
    <header>
      {headerImage && <BannerImage {...headerImage} />}
      {headerButton && <Button {...headerButton} />}
      {headerIcon && <Icon {...headerIcon} />}
      {headerBadge && <Badge {...headerBadge} />}
      <NavigationBar {...navbar} />
    </header>
  );
};

export default HeaderComponent;
