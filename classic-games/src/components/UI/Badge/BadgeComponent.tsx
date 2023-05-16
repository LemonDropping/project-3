import { BadgeComponentInterface } from "../../../types";
import Icon from "../Icon/IconComponent";

const BadgeComponent = ({
  badgeText,
  filled,
  badgeIcon,
  badgePath,
  onClick
}: BadgeComponentInterface) => {
  return (
    <span onClick={onClick} className={filled ? "filled" : ""}>
      {badgeIcon && <Icon {...badgeIcon} />}
      {badgeText}
    </span>
  );
};

export default BadgeComponent;
