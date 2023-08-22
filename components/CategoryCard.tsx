"use client";
import { Category } from "@/types";
import React from "react";
import Image from "next/image";
import urlFor from "@/libs/urlFor";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Skeleton } from "@/components/ui/Skeleton";
interface CategoryCardProps {
  category: Category;
}
const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const pathname = usePathname();
  return (
    <Link
      href={{
        pathname: `/category/${pathname?.split("/")[2]}/${category.title}`,
        query: {
          pageIndex: 0,
        },
      }}
    >
      <div className="p-[14px] h-full bg-gray-400/5">
        <div className="bg-white relative w-auto h-[220px] m-[15px] ">
          {!!category.thumbnail ? (
            <Image
              src={urlFor(category.thumbnail).url()}
              alt="thumbnail category"
              sizes="100%"
              fill
              className="object-cover"
            />
          ) : (
            <Skeleton className="h-[220px]" />
          )}
        </div>
        <div className="block mt-[30px] mb-[15px]">
          <h2 className="text-[30px] text-center font-bold capitalize mb-[5px]">
            {category.title}
          </h2>
          <small className="text-[13px] font-light text-center line-clamp-2">
            {category.description?.slice(0, 120)}
          </small>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
