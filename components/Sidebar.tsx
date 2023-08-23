"use client";
import React from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import getCategories from "@/actions/get-categories";
import { getAllPosts } from "@/actions/get-posts";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const arrayPathname = pathname!.split("/");
  const dataCategories = useQuery({
    queryKey: ["filter-categories"],
    queryFn: getCategories,
    staleTime: 10000,
  });
  const dataAllPosts = useQuery({
    queryKey: ["filter-posts"],
    queryFn: getAllPosts,
    staleTime: 10000,
  });
  console.log(dataCategories, dataAllPosts);
  const selected = arrayPathname[arrayPathname.length - 1];
  return (
    <div className="hidden sm:block min-w-[240px] pr-[20px] border-r border-[#fda47c]">
      <h4 className="text-[28px] font-bold mb-[20px]">My Post Index</h4>
      <ul>
        {dataCategories.data?.map((item, idx) => {
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
                {item.tags.map((tag: any) => {
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
                          dataAllPosts.data?.filter((item) => {
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
