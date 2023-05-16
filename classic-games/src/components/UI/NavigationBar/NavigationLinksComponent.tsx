import { Link } from "react-router-dom";
import { NavigationLinksComponentInterface } from "../../../types";

const NavigationLinksComponent = ({
  linkText,
  linkPath
}: NavigationLinksComponentInterface) => {
  return <Link to={linkPath}>{linkText}</Link>;
};

export default NavigationLinksComponent;
