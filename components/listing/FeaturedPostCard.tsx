"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import urlFor from "@/libs/urlFor";
import { Post } from "@/types";
import ClientSideRoute from "../ClientSideRoute";
import { Skeleton } from "../ui/Skeleton";
interface PostProps {
  post: Post;
}
const FeaturedPostCard: React.FC<PostProps> = ({ post }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div className="">
      <div className="flex flex-col gap-[20px] sm:gap-[0px]  shadow-xl group">
        <Link href={`/post/${post.slug.current}`}>
          <div className=" bg-white relative w-full h-[400px]  overflow-hidden bg-blend-darken">
            {isLoaded === true && (
              <div className="absolute top-0 left-0 w-full h-[400px]">
                {/* <Skeleton width="100%" height={200} className="" /> */}
              </div>
            )}

            {post.mainImage && (
              <Image
                src={urlFor(post.mainImage).url()}
                onLoad={() => setIsLoaded(true)}
                onLoadingComplete={() => setIsLoaded(false)}
                alt="post image"
                width="0"
                height="0"
                sizes="100%"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                  maxHeight: "400px",
                }}
              />
            )}

            <div className="absolute bottom-0 left-0 p-[50px]  w-full h-full flex justify-end bg-gray-800/60  flex-col ">
              <div className="absolute left-full top-0 h-full w-full cursor-pointer bg-white/20 flex items-center justify-center group-hover:left-[0]"></div>
              <span className="block bg-black text-white text-[18px] w-fit px-[4px] py-[0px]">
                Featured
              </span>
              <h3 className="  text-[28px]  font-dm-sans  line-clamp-1 text-black inline w-fit bg-white px-[10px] py-[2px] break-words relative font-bold ">
                {post.title}
              </h3>
              <p className="text-white text-[16px] font-regular pr-[80px] line-clamp-2 ">
                {post.overview}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPostCard;
