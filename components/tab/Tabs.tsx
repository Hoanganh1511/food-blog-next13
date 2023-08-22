"use client";
import React from "react";
import qs from "query-string";
import { useRouter } from "next/navigation";
import ClientSideRoute from "../ClientSideRoute";
import Link from "next/link";
import { categories } from "@/libs/data";
const Tabs = () => {
  return (
    <div id="tab-head" className="flex gap-[20px] mb-[12px] border-b">
      {categories.map((item, idx) => (
        <Link
          key={idx}
          href={{
            pathname: `/category/${item.title}`,
          }}
        >
          <div
            id="tab"
            className={`relative px-[50px] py-[15px] text-[15px] uppercase  font-bold cursor-pointer hover:text-blue-950/80 dark:text-white duration-100 hover:text-[#ec7f71]`}
          >
            {item.title}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
