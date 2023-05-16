
import { 
    BannerImageComponentInterface,
    ButtonComponentInterface,
    IconComponentInterface,
    BadgeComponentInterface
} from '../../../types';

import React from 'react';

const handleBannerButtonClick = () => {
  console.log("banner button clicked");
}


export const HEADER_IMAGE: BannerImageComponentInterface = {
  bannerImage: "https://source.unsplash.com/random/",
  bannerPath: "/home",
  bannerText: "Header Banner Image",
  bannerButton: {
    buttonText: "Click Me",
    buttonPath: "/button"
  },
  bannerBadge: {
    badgeText: "New!",
    filled: true,
    // badgeIcon: {
    //   icon: <ComputerDesktopIcon />,
    //   iconPath: "/",
    // },
  },
  // bannerIcon: {
  //   icon: <i className="fas fa-search"></i>,
  //   iconPath: "/search"
  // }
};

// export const HEADER_BUTTON: ButtonComponentInterface = {
//   buttonText: "Banner Button",
//   buttonType: "submit",
//   buttonPath: "/",
//   onClick: handleBannerButtonClick,
// };

// export const HEADER_ICON: IconComponentInterface = {
//   icon: <MoonIcon />,
//   iconPath: "/user",
// };

// export const HEADER_BADGE: BadgeComponentInterface = {
//   badgeText: "5",
//   filled: false,
//   badgePath: "/notifications",
//   badgeIcon: {
//     icon: <MoonIcon />,
//     iconPath: "/bell"
//   }
// };

