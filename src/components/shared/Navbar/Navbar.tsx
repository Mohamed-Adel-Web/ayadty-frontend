"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { NavbarProps, NavbarStyleProps, INavItem } from "./interface";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { AlignJustify, X } from "lucide-react";
import useNav from "./useNav";

export default function Navbar({
  navItems,
  authItems,
  logo,
  style = {},
}: NavbarProps) {
  const { mobileMenuOpen, toggleMobileMenu } = useNav();
  return (
    <nav
      className={cn(
        "bg-clinic-primary py-4 shadow-md sticky top-0 z-50",
        style.navClass
      )}
    >
      <div
        className={cn(
          "container text-white flex justify-between items-center",
          style.containerClass
        )}
      >
        <div className="flex items-center">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width || 100}
            height={logo.height || 40}
            className={cn("h-10 w-auto", style.logoClass)}
            priority
          />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <ul className={cn("flex gap-6", style.navListClass)}>
            {navItems.map((item) => (
              <NavItem key={item.name} item={item} style={style} />
            ))}
          </ul>

          <ul className={cn("flex gap-4", style.authListClass)}>
            {authItems.map((item) => (
              <NavItem key={item.name} item={item} style={style} />
            ))}
          </ul>
        </div>

        <Button
          className="md:hidden p-2 rounded-md text-white bg-white/10 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X /> : <AlignJustify className="w-6 h-6  " />}
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-clinic-primary text-white px-4 py-2">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <MobileNavItem key={item.name} item={item} style={style} />
            ))}
            {authItems.map((item) => (
              <MobileNavItem
                key={item.name}
                item={item}
                style={style}
                onClick={() => {
                  toggleMobileMenu();
                }}
              />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

function NavItem({
  item,
  style,
  onClick,
}: {
  item: INavItem;
  style: NavbarStyleProps;
  onClick?: () => void;
}) {
  return (
    <li
      className={cn(
        "group relative",
        style.navItemClass || style.authItemClass
      )}
    >
      <Link
        href={item.href}
        onClick={onClick}
        className={cn(
          "hover:text-gray-200 transition-colors duration-300 font-medium flex items-center gap-1",
          style.navLinkClass || style.authLinkClass
        )}
      >
        {item.icon && <span>{item.icon}</span>}
        {item.name}
      </Link>
    </li>
  );
}

function MobileNavItem({
  item,
  style,
  onClick,
}: {
  item: INavItem;
  style: NavbarStyleProps;
  onClick?: () => void;
}) {
  return (
    <li
      className={cn(
        "group relative",
        style.navItemClass || style.authItemClass
      )}
    >
      <Link
        href={item.href}
        onClick={onClick}
        className={cn(
          "block px-4 py-2 hover:bg-white/10 rounded transition-colors",
          style.navLinkClass || style.authLinkClass
        )}
      >
        {item.name}
      </Link>
    </li>
  );
}
