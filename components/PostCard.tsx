"use client";
import React from "react";
import Image from "next/image";
import urlFor from "@/libs/urlFor";
import { Post } from "@/types";
import Link from "next/link";
interface PostProps {
  post: Post;
}
const PostCard: React.FC<PostProps> = ({ post }) => {
  return (
    <>
      <Link
        href={{
          pathname: `/post/${post.slug.current}`,
          query: {
            pageIndex: 0,
          },
        }}
      >
        <div
          className="flex flex-col gap-[20px] sm:gap-[0px]  overflow-hidden  h-full 
          bg-gray-400/10 
          dark:bg-white/10
          group
          dark:hover:bg-[#1450A3]
          hover:bg-[#1450A3]"
        >
          <div className=" bg-white relative w-auto h-[220px] m-[15px]  ">
            <Image
              src={urlFor(post.mainImage).url()}
              alt="post image"
              fill
              loading="lazy"
              className="object-cover"
            />
          </div>
          <div className="m-[15px]">
            <h2 className="mt-[5px] mb-[10px] font-bold text-[18px] dark:text-white group-hover:text-white">
              {post.title}
            </h2>
            <p className="font-light leading-5  dark:text-white  group-hover:text-white">
              {post.overview?.slice(0, 120)}...
            </p>
            <div className="mt-[10px] flex  items-center">
              <span className="block pt-[6px] text-[14px] font-semibold group-hover:text-white dark:text-white">
                Rating: 4.67
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PostCard;
