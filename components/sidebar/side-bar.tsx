"use client";
import React from "react";
import { HiHome } from "react-icons/hi";
import { RiCompassDiscoverFill, RiSettingsLine } from "react-icons/ri";
import { BiBookmarkMinus } from "react-icons/bi";
import { LiaUserCircleSolid } from "react-icons/lia";
import Link from "next/link";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const Sidebar = () => {
  const sidebarOptions1 = [
    {
      name: "Home",
      href: "/",
      icon: HiHome,
    },
    {
      name: "Discover",
      href: "/discorver",
      icon: RiCompassDiscoverFill,
    },
    {
      name: "Bookmark",
      href: "/bookmark",
      icon: BiBookmarkMinus,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: RiSettingsLine,
    },
  ];
  return (
    <div className="hidden h-screen lg:fixed lg:flex lg:w-[100px] lg:flex-col ">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-100 px-6 pb-4 ">
        <div className="pt-[40px]">
          <ul role="list" className="flex flex-col gap-[40px]">
            {sidebarOptions1.map((option, idx) => (
              <li key={idx}>
                <Link
                  href={option.href}
                  className="flex flex-col gap-[4px] items-center uppercase font-medium text-xs text-gray-400 hover:text-black"
                >
                  <option.icon size={22} />
                  {option.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="py-[30px]">
          <div className="w-full h-[2px] bg-gray-300"></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Sidebar;
