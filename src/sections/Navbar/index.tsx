import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { MobileMenuToggle } from "@/sections/Navbar/components/MobileMenuToggle";
import { DesktopMenu } from "@/sections/Navbar/components/DesktopMenu";

export const Navbar = () => {
  return (
    <nav className="relative items-center bg-zinc-800 box-border caret-transparent flex flex-wrap justify-between px-4 py-2 md:flex-nowrap md:justify-start">
      <NavbarLogo />
      <MobileMenuToggle />
      <DesktopMenu />
    </nav>
  );
};
