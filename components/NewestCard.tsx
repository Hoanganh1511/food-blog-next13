import { Post } from "@/types";
import Image from "next/image";
import React from "react";
import { Card } from "./ui/card";
import urlFor from "@/libs/urlFor";
import Link from "next/link";
interface NewestCardProps {
  post: Post;
  idx: number;
}
const NewestCard: React.FC<NewestCardProps> = ({ post, idx }) => {
  return (
    <div className="col-span-1">
      <Link href={`/post/${post.slug.current}`}>
        <div
          className={`relative col-span-1 ${
            (idx === 5 || idx === 10) &&
            "after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-70 after:bg-newestPost after:z-20"
          }`}
        >
          <div
            key={post._id}
            className="
                block
                group
                w-full 
                min-h-[300px]
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
              priority
            />
          </div>
          <div className="p-[20px] z-30 absolute bottom-0 left-0">
            <div>
              <small className="px-[10px] py-[4px] block bg-black text-white w-fit">
                Chinese Food
              </small>
              <h5 className="px-[20px] py-[10px]  bg-white text-black text-[22px] font-bold w-fit">
                {post.title}
              </h5>
              {(idx === 5 || idx === 10) && (
                <p className="text-white py-[16px] text-[20px] font-medium">
                  {post.overview}
                </p>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewestCard;
