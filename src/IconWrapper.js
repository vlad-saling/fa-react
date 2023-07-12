import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function IconWrapper({ iconType, ...props }) {
  const iconT = () => {
    switch (iconType) {
      case "faCoffee":
        return faCoffee;
      default:
        return null;
    }
  };

  return <FontAwesomeIcon icon={iconT()} />;
}
