import { INavItem } from "@/components/shared/Navbar/interface";

const navItems: INavItem[] = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About Us",
    href: "#about",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const authItems: INavItem[] = [
  {
    name: "Sign Up",
    href: "/signup",
  },
];
const logo = {
  src: "/images/logo.png",
  alt: "Clinic Logo",
  width: 100,
  height: 40,
};
export { navItems, authItems, logo };
