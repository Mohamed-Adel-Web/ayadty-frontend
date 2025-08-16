import { useState } from "react";

const useNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return {
    mobileMenuOpen,
    toggleMobileMenu,
  };
};
export default useNav;
