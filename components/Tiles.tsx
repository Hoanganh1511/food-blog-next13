import { Post } from "@/types";
import Image from "next/image";
import React from "react";
import Container from "./ui/Container";
import { Shell } from "./shells/shells";
import { Card } from "./ui/card";
import Link from "next/link";
import urlFor from "@/libs/urlFor";
interface TilesProps {
  posts: Post[];
}
const Tiles: React.FC<TilesProps> = ({ posts }) => {
  const chickenPosts = posts.filter((post) => {
    return post.tags?.find((item) => item.title == "chicken");
  });
  const campFoodPosts = posts.filter((post) => {
    return post.tags?.find((item) => item.title == "camp");
  });
  const vegetarianPosts = posts.filter((post) => {
    return post.tags?.find((item) => item.title == "vegetarian");
  });
  return (
    <div className="bg-[#fff5e6] py-[30px]">
      <Container>
        <div>
          <h2 className="py-[30px] font-bold text-[34px]">
            <Link href="">Our Best Chicken Recipes</Link>
          </h2>
          <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {chickenPosts.map((post) => {
              return (
                <Link
                  key={post._id}
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
            })}
          </div>
        </div>
        <div>
          <h2 className="py-[30px] font-bold text-[34px] w-fit">
            <Link href="">We love our Camp Foods </Link>
          </h2>

          <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {campFoodPosts.map((post) => {
              return (
                <Link
                  key={post._id}
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
            })}
          </div>
        </div>
        <div>
          <h2 className="py-[30px] font-bold text-[34px] w-fit">
            <Link href="">Vegan/Vegetarian Recipes </Link>
          </h2>

          <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {vegetarianPosts.map((post) => {
              return (
                <Link
                  key={post._id}
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
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tiles;
