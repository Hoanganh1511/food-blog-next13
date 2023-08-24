"use client";
import React from "react";
import qs from "query-string";
import { useRouter } from "next/navigation";
import ClientSideRoute from "../ClientSideRoute";
import Link from "next/link";
import { categories } from "@/libs/data";
import Container from "../ui/Container";
const Tabs = () => {
  return (
    <Container>
      <div id="tab-head" className="flex gap-[50px] mb-[12px] border-b">
        {categories.map((item, idx) => (
          <Link
            key={idx}
            href={{
              pathname: `/category/${item.title}`,
            }}
          >
            <div
              id="tab"
              className={`relative overflow-hidden py-[15px] text-[15px] uppercase  font-bold cursor-pointer  dark:text-white duration-100 hover:text-[#ec7f71]
                after:absolute after:-translate-x-full after:
              `}
            >
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Tabs;
