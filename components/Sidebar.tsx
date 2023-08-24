"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface SidebarProps {
  categories: any[];
  allPosts: any[];
}
const Sidebar: React.FC<SidebarProps> = ({ categories, allPosts }) => {
  const pathname = usePathname();
  const arrayPathname = pathname!.split("/");
  const selected = arrayPathname[arrayPathname.length - 1];
  return (
    <div className="hidden sm:block min-w-[240px] pr-[20px] border-r border-[#fda47c]">
      <h4 className="text-[28px] font-bold mb-[20px]">My Post Index</h4>
      <ul>
        {categories?.map((item, idx) => {
          return (
            <li key={idx} className="mb-[12px]">
              <h5
                className={`text-[18px] font-bold  py-[3px]
              ${selected === item.title ? "text-[#ef9076]" : "text-[#174099]"}
              `}
              >
                <Link
                  href={{
                    pathname: `/category/${item.title}`,
                  }}
                >
                  {item.title}
                </Link>
              </h5>
              <ul className="pl-[20px] flex flex-col ">
                {item.tags?.map((tag: any) => {
                  return (
                    <li key={tag.title} className="flex gap-[6px] items-center">
                      <Link
                        href={{
                          pathname: `/category/${item.title}/${tag.title}`,
                          query: {
                            pageIndex: 0,
                          },
                        }}
                        className={`block py-[4px] font-bold text-[18px] 
                        ${
                          selected === tag.title
                            ? "text-[#ef9076]"
                            : "text-[#174099]"
                        }
                        
                        `}
                      >
                        {tag.title}
                      </Link>
                      <span className="block pt-[2px] font-bold">
                        (
                        {
                          allPosts?.filter((item) => {
                            return item.tags.find(
                              (item: any) => item.title === tag.title
                            );
                          }).length
                        }
                        )
                      </span>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
