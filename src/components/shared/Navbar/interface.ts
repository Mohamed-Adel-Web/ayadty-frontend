export interface INavItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

export interface LogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface NavbarStyleProps {
  navClass?: string;
  containerClass?: string;
  logoClass?: string;
  navItemClass?: string;
  navLinkClass?: string;
  authItemClass?: string;
  authLinkClass?: string;
  navListClass?: string;
  authListClass?: string;
  imageClass?: string;
}

export interface NavbarProps {
  navItems: INavItem[];
  authItems: INavItem[];
  logo: LogoProps;
  style?: NavbarStyleProps;
  mobileMenuOpen?: boolean;
  onMobileMenuToggle?: () => void;
}
