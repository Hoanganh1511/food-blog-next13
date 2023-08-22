import { client } from "@/libs/sanity.client";
import { QueryFunctionContext } from "@tanstack/react-query";
import { groq } from "next-sanity";

const getSearchPosts = async ({ queryKey }: QueryFunctionContext) => {
  const [_, searchQuery] = queryKey;
  const querySanity = groq`*[ _type=="post"  && title match $searchQuery ]{
      ...,
    
    } | order(_createdAt desc)
    `;
  const posts = await client.fetch(querySanity, {
    searchQuery,
    cache: "no-store",
  });
  return posts;
};
export { getSearchPosts };
