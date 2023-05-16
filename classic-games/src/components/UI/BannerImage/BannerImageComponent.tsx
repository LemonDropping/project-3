import { BannerImageComponentInterface } from "../../../types";
import Button from "../../UI/Button/ButtonComponent";
import Badge from "../../UI/Badge/BadgeComponent";
import Icon from "../../UI/Icon/IconComponent";
import styles from './BannerImage.module.css';

const BannerImageComponent = ({
  bannerImage,
  bannerPath,
  bannerText,
  bannerButton,
  bannerBadge,
  bannerIcon
}: BannerImageComponentInterface) => {
  return (
    <div >
      <img src={bannerImage} alt={bannerText} className={`${styles.bannerImage}`}/>
      {bannerButton && <Button {...bannerButton} />}
      {bannerBadge && <Badge {...bannerBadge} />}
      {bannerIcon && <Icon {...bannerIcon} />}
    </div>
  );
};

export default BannerImageComponent;
