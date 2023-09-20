import React from "react";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";

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
    <nav className="w-full">
      <div className="fixed w-full h-16 backdrop-blur justify-between items-center text-white px-8 z-50 bg-[#002E6D]/80 hidden lg:flex">
        <a href="/" className="h-14 w-14">
          <img src="/logo-white.png" alt="logo de floridablanca" />
        </a>
        <div className="">
          <li className="flex justify-center space-x-12">
            {links.map((link) => (
              <a
                href={link.href}
                className="border-b-[1px] border-transparent leading-none hover:border-b-[1px] hover:border-white font-spaceTransit text-4xl tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </li>
        </div>
        <div className="px-3 py-1 bg-white/5 hover:bg-white leading-none cursor-pointer duration-200 text-white hover:text-black font-spaceTransit text-4xl tracking-wide">
          RESERVATION
        </div>
      </div>

      <div className="lg:hidden fixed left-6 top-6 z-50">
        <Sheet key="left">
          <SheetTrigger className="overflow-hidden">
            <AlignJustify className="scale-150" />
          </SheetTrigger>
          <SheetContent className="bg-[#002E6D]">
            <SheetHeader>
              <SheetDescription className="flex flex-col">
                {links.map((items) => (
                  <a
                    key={items.label}
                    href={items.href}
                    className="overflow-hidden h-20 w-4/5 flex items-center text-white hover:bg-[#274b7e] duration-300 px-5 py-3 cursor-pointer"
                  >
                    <h3 className="font-spaceTransit text-6xl tracking-wide">
                      {items.label.toUpperCase()}
                    </h3>
                  </a>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navbar;
