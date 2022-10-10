import { FiMonitor } from "react-icons/fi";
import {
  SiPlaystation4,
  SiPlaystation,
  SiNintendoswitch,
  SiXbox,
  SiApple,
  SiLinux
} from "react-icons/si";
import { RiEarthLine } from "react-icons/ri";

export const getPlatformImage = (platformID) => {
  switch (platformID) {
    case 4: //PC
      return <FiMonitor />;
    case 187: //PS5
      return <SiPlaystation />;
    case 1: //Xbox One
      return <SiXbox />;
    case 18: //PS4
      return <SiPlaystation />;
    case 7: //Switch Nintendo
      return <SiNintendoswitch />;
    case 5: //MacOS
      return <SiApple />;
    case 6: //Linux
      return <SiLinux />;
    default:
      return <RiEarthLine />;
  }
};


export const colorizeMetaCritic = (metaNote) => {
  if (metaNote === null) {
    return "text-white";
  } else if (metaNote < 25) {
    return "text-red-700";
  } else if (metaNote < 50) {
    return "text-yellow-400";
  } else if (metaNote <= 100) {
    return "text-lime-500";
  }
};
