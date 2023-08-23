"use client";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import React, { useCallback, useRef, useState, useTransition } from "react";
import useClickOutside from "@/hooks/useClickOutside";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { ImSearch } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import { useRouter, useSearchParams } from "next/navigation";
const MediumHeader = () => {
  const [mode, setMode] = useThemeSwitcher();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [isShowSubscribeForm, setShowSubscribeForm] = useState(false);
  const [isShowSearchForm, setShowSearchForm] = useState(false);
  const [valueTyped, setValueTyped] = useState("");

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
    <div className="sticky top-0 bg-[#f4f4f4] dark:bg-[#181818] z-50  ">
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

      <div className="mx-auto  ">
        <div className="h-[60px] flex justify-between items-center border-b border-[#5C5470] px-[20px]">
          <div className="w-1/3">
            <div className="flex items-center gap-[20px]">
              <button className="dark:text-white">
                <HiMenu size={24} />
              </button>
              <button
                className="ml-[10px] font-bold dark:text-white"
                onClick={() => setShowSubscribeForm(true)}
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="hidden md:block md:w-1/3">
            <Link href="/">
              <h1 className="text-[28px] font-black text-center dark:text-white">
                Tuananh.cookies
              </h1>
            </Link>
          </div>
          <div className="w-1/3 flex justify-end">
            <div className="flex items-center gap-[14px]">
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
              <button onClick={() => setShowSearchForm(true)}>
                <ImSearch className="dark:text-white" />
              </button>
            </div>
          </div>
          <div
            className={`${
              isShowSubscribeForm ? " opacity-1" : "scale-0 opacity-0"
            }
            duration-100
            fixed top-[60px] left-0 w-full h-[130px] bg-[#1450A3]`}
          >
            <button
              className="absolute top-[6px] right-[6px]"
              onClick={() => setShowSubscribeForm(false)}
            >
              <IoMdClose size={24} className="text-white/80" />
            </button>
            <div className="p-[15px] h-full w-fit flex items-center mx-auto">
              <div className="flex items-center gap-[12px] mr-[30px]">
                <h4 className="text-[24px] text-white font-semibold">
                  Lets 🐝 friends!{" "}
                </h4>
                <p className="pt-[8px] text-white font-light">
                  Join Our Weekly-ish Newsletter Club
                </p>
              </div>
              <div>
                <form>
                  <div className="flex items-center gap-[12px]">
                    <input
                      type="text"
                      placeholder="Email"
                      className="outline-none border-b border-white/50 bg-transparent
                      py-[4px]
                      pl-[12px]
                      font-light
                      text-white
                      text-[17px]
                      leading-[20px]
                      "
                    />
                    <input
                      type="text"
                      placeholder="Name"
                      className="outline-none border-b border-white/50 bg-transparent
                     py-[4px]
                     pl-[12px]
                     font-light
                     text-white
                     text-[17px]
                     leading-[20px]
                     "
                    />
                    <button className="px-[26px] py-[10px] bg-[#fda47c] text-[#174099] font-bold text-[18px] leading-5">
                      Join!
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediumHeader;
