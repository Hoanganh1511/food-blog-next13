"use client";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import Link from "next/link";
import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";
import { RiSearchLine } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";
import Avatar from "@/public/images/avatar.webp";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import { ImSearch } from "react-icons/im";
import useClickOutside from "@/hooks/useClickOutside";
import { useRouter, useSearchParams } from "next/navigation";
const Header = () => {
  const [mode, setMode] = useThemeSwitcher();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isShowSearchForm, setShowSearchForm] = useState(false);
  const [valueTyped, setValueTyped] = useState("");
  const [isPending, startTransition] = useTransition();
  const ref = useRef(null);
  useClickOutside(ref, () => setShowSearchForm(false));
  const createQueryString = useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString());
      for (const [key, value] of Object.entries(params)) {
        if (value === null) {
          newSearchParams.delete(key);
        } else {
          newSearchParams.set(key, String(value));
        }
      }

      return newSearchParams.toString();
    },
    [searchParams]
  );

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setShowSearchForm(false);
    startTransition(() => {
      router.push(
        `/search?${createQueryString({
          s: valueTyped,
        })}`
      );
    });
  };
  return (
    <div
      className="sticky top-0 bg-white block dark:bg-black dark:text-white z-50
    border-b-2 border-black/80
    "
    >
      {isShowSearchForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#002987d6]">
          <form onSubmit={handleSubmit}>
            <div
              ref={ref}
              className="animate-searchBox absolute right-0 top-0 flex items-center  w-[300px] h-[50px] px-[20px] bg-white"
            >
              <input
                type="text"
                placeholder="Search Articles"
                className="w-full outline-none border-none font-semibold text-black/70"
                value={valueTyped}
                onChange={(e: any) => setValueTyped(e.target.value)}
              />
              <button type="submit">
                <ImSearch size={20} className="text-black/80 " />
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="mx-auto px-[20px] max-w-[1420px] xl:max-w-[1820px] py-[20px]">
        <div className="flex justify-between items-center ">
          {/* <div className="flex items-center md:hidden w-1/3 ">
            <button onClick={() => setShowSearchForm(true)}>
              <RiSearchLine size={23} />
            </button>
          </div> */}
          <div className="w-1/3">
            <div className="flex items-center gap-[20px]">
              <button>
                <HiMenu size={23} />
              </button>
              <Link href="/">
                <h1 className="dark:text-white  text-center md:text-left font-bold relative">
                  <span className="text-[40px] md:text-[60px]">T</span>
                  <span className=" text-[40px] md:text-[56px]">u</span>
                  <span className="text-[40px] md:text-[54px]">a</span>
                  <span className="text-[40px] md:text-[52px]">n</span>
                  <span className="text-[40px] md:text-[50px]">a</span>
                  <span className="text-[40px] md:text-[48px]">n</span>
                  <span className="text-[40px] md:text-[46px]">h</span>
                  <span className="text-[40px] md:text-[50px]">.</span>
                  <span className="text-[40px] md:text-[60px]">C</span>
                  <span className="text-[40px] md:text-[56px]">o</span>
                  <span className="text-[40px] md:text-[54px]">o</span>
                  <span className="text-[40px] md:text-[52px]">k</span>
                  <span className="text-[40px] md:text-[50px]">i</span>
                  <span className="text-[40px] md:text-[48px]">e</span>
                  <span className="text-[40px] md:text-[46px]">s</span>
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
                <div className="hidden md:block mx-[20px] h-[20px] w-[1px] bg-gray-400"></div>
                <button onClick={() => setShowSearchForm(true)}>
                  <RiSearchLine size={23} />
                </button>
              </div>

              {/* <div className="flex items-center gap-[12px]">
                <Image
                  src={Avatar}
                  alt="avatar"
                  className="rounded-full"
                  width={40}
                  height={40}
                />
                <BiChevronDown size={22} />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
