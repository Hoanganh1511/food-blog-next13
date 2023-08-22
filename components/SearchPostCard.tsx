import urlFor from "@/libs/urlFor";
import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface SearchPostCardProps {
  post: Post;
}
const SearchPostCard: React.FC<SearchPostCardProps> = ({ post }) => {
  return (
    <Link
      aria-label={`View ${post.title} details`}
      href={`/post/${post.slug.current}`}
    >
      <div className="p-[20px] h-full bg-white">
        <div
          className="
            block
            group
            w-full 
            min-h-[200px]
            relative 
            overflow-hidden 
            z-20"
        >
          <Image
            src={urlFor(post.mainImage).url()}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="post- detail"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <small className="font-bold bg-black text-white text-[15px] px-[10px] h-[20px] flex items-center justify-center w-fit">
            {post.tags[0].title}
          </small>
          <h4 className="text-[20px] font-bold my-[10px] leading-[24px]">
            {post.title}
          </h4>
          <p className="text-[14px] font-light leading-[16px]">
            {post.overview}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SearchPostCard;
