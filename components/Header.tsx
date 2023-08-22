"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";
import { RiSearchLine } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";
import Avatar from "@/public/images/avatar.webp";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";
const Header = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpenSearch, setOpenSearch] = useState(false);
  return (
    <div
      className="sticky top-0 bg-white block dark:bg-black dark:text-white z-50
    border-b-2 border-black/80
    "
    >
      <div className="mx-auto px-[20px] max-w-[1420px] py-[20px]">
        <div className="flex justify-between items-center ">
          <div className="flex items-center md:hidden w-1/3 ">
            <button onClick={() => setOpenSearch(true)}>
              <RiSearchLine size={23} />
            </button>
          </div>
          <div className="w-1/3">
            <div className="flex items-center gap-[20px]">
              <button>
                <HiMenu size={23} />
              </button>
              <Link href="/">
                <h1 className="dark:text-white  text-center md:text-left font-bold relative">
                  <span className="text-[60px]">T</span>
                  <span className="text-[56px]">u</span>
                  <span className="text-[54px]">a</span>
                  <span className="text-[52px]">n</span>
                  <span className="text-[50px]">a</span>
                  <span className="text-[48px]">n</span>
                  <span className="text-[46px]">h</span>
                  <span className="text-[50px]">.</span>
                  <span className="text-[60px]">C</span>
                  <span className="text-[56px]">o</span>
                  <span className="text-[54px]">o</span>
                  <span className="text-[52px]">k</span>
                  <span className="text-[50px]">i</span>
                  <span className="text-[48px]">e</span>
                  <span className="text-[46px]">s</span>
                </h1>
              </Link>
            </div>
          </div>
          <div className="hidden sm:block sm:w-1/3"></div>
          <div className="w-1/3 flex justify-end">
            <div className="flex items-center">
              <div className="hidden md:flex items-center">
                <button
                  onClick={() => setMode(mode === "light" ? "dark" : "light")}
                  className={`ml-3  sm:mx-1 flex -items-center justify-center rounded-full p-1 

          `}
                >
                  {mode === "dark" ? (
                    <BsSunFill className={"dark:text-white"} />
                  ) : (
                    <BsFillMoonFill className={"dark:text-white"} />
                  )}
                </button>
              </div>
              <div className="hidden md:block mx-[20px] h-[20px] w-[1px] bg-gray-400"></div>
              <div className="flex items-center gap-[12px]">
                <Image
                  src={Avatar}
                  alt="avatar"
                  className="rounded-full"
                  width={40}
                  height={40}
                />
                <BiChevronDown size={22} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
