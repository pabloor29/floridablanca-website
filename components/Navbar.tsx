import React from "react";

const links = [
  {
    label: "acceuil",
    href: "/",
  },
  {
    label: "a propos",
    href: "/apropos",
  },
  {
    label: "menu",
    href: "/menu",
  },
  {
    label: "evenements",
    href: "/evenements",
  },
  {
    label: "contact",
    href: "/contact",
  },
];

function Navbar() {
  return (
    <div className="fixed w-full h-16 backdrop-blur flex justify-between items-center text-white px-8 z-50 bg-[#002E6D]/80">
      <a href="/" className="h-14 w-14">
        <img src="/logo-white.png" alt="logo de floridablanca" />
      </a>
      <div className="">
        <li className="flex justify-center space-x-12">
          {links.map((link) => (
            <a href={link.href} className="border-b-[1px] border-transparent hover:border-b-[1px] hover:border-white font-spaceTransit text-4xl tracking-wide">
              {link.label}
            </a>
          ))}
        </li>
      </div>
      <div className="px-3 py-1 bg-white/5 hover:bg-white cursor-pointer duration-200 text-white hover:text-black font-spaceTransit text-4xl tracking-wide">
        RESERVATION
      </div>
    </div>
  );
}

export default Navbar;
