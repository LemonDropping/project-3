// Header Component interfaces.

export interface HeaderInterface {
  headerImage?: BannerImageComponentInterface;
  headerButton?: ButtonComponentInterface;
  headerIcon?: IconComponentInterface;
  headerBadge?: BadgeComponentInterface;
  navbar: NavigationBarComponentInterface;
  }
  
export interface NavigationBarComponentInterface {
  navbarIcon?: IconComponentInterface;
  navbarLinks: NavigationLinksComponentInterface[];
  navbarButton?: ButtonComponentInterface;
  navbarText?: string;
  }
  
export interface NavigationLinksComponentInterface {
  linkPath: string;
  linkText: string;
  isLoggedIn?: boolean;
}
  
export interface BannerImageComponentInterface {
  bannerImage: string;
  bannerPath?: string;
  bannerText?: string;
  bannerButton?: ButtonComponentInterface;
  bannerBadge?: BadgeComponentInterface;
  bannerIcon?: IconComponentInterface;
}

// SignUpPage Copmonent interface.

export interface SignUpPageComponentInterface {
  onSubmit: ( signUpFormData: {
    key: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
  }) => void;
  

}


// Utility component Interfaces

export interface ButtonComponentInterface {
  buttonText: string;
  buttonType?: "submit" | "button" | "reset" | undefined;
  buttonPath?: string;
  filled?: boolean;
  buttonIcon?: IconComponentInterface;
  onClick?: () => void;
  }
  
export interface BadgeComponentInterface {
  badgeText: string;
  filled?: boolean;
  badgeIcon?: IconComponentInterface;
  badgePath?: string;
  onClick?: () => void;
}
  
export interface IconComponentInterface {
  icon: JSX.Element;
  iconPath?: string;
}

export interface FormInputInterface {
  key: string;
  className?: string;
  inputType: string;
  inputLabel: string;
  inputValue: string;
  inputPlaceholder: string;
  isRequired: boolean;
  inputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}[]
  