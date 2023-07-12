import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faSpinner, faRobot } from "@fortawesome/free-solid-svg-icons";

export default function IconWrapper({ iconType, ...props }) {
  const iconT = () => {
    switch (iconType) {
      case "faCoffee":
        return faCoffee;
      case "faSpinner":
        return faSpinner;
      case "faRobot":
        return faRobot;
      default:
        return null;
    }
  };
  
  return <FontAwesomeIcon icon={iconT()} />;
}
