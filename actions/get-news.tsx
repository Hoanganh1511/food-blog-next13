import { client } from "@/libs/sanity.client";
import { Post } from "@/types";
import { groq } from "next-sanity";

const getTechnologies = async (): Promise<Post[]> => {
  const querySanity = groq`*[_type=="category"  && type=="news"]{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
 
  `;
  const posts = await client.fetch(querySanity, {});
  return posts;
};
export default getTechnologies;
