import urlFor from "@/libs/urlFor";
import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface PopularThisWeekPostProps {
  post: Post;
}
const PopularThisWeekPost: React.FC<PopularThisWeekPostProps> = ({ post }) => {
  return (
    <Link href={`/post/${post.slug.current}`} className="">
      <div className="flex bg-white">
        <div
          className="
            block
            group
            w-[200px] 
            h-[200px]
            relative 
            overflow-hidden 
            bg-newestPost
            z-20"
        >
          <Image
            src={urlFor(post.mainImage).url()}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, (max-width: 1980px) 33vw, 33vw"
            alt="post- detail"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center ml-[50px]">
          <small className="px-[10px] py-[4px] block bg-black text-white w-fit">
            Ease
          </small>
          <h5 className="py-[16px]  text-black text-[25px] font-bold w-fit">
            {post.title}
          </h5>
          <p className=" text-[18px] font-medium">Rating: 4.8 ⭐⭐⭐⭐⭐</p>
        </div>
      </div>
    </Link>
  );
};

export default PopularThisWeekPost;
