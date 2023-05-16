import { IconComponentInterface } from "../../../types";
import { Link } from 'react-router-dom'
import { MoonIcon } from "@heroicons/react/24/solid";

const IconComponent = ({ icon, iconPath }: IconComponentInterface) => {
  return (

    <Link to={iconPath}>{icon}</Link>
    
    
  
  ) 
};

export default IconComponent;
