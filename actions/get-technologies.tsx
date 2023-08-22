import { client } from "@/libs/sanity.client";
import { Post } from "@/types";
import { groq } from "next-sanity";
const getTechnologies = async (): Promise<Post[]> => {
  const querySanity = groq`*[_type=="category"]{
    ...,
    tags[]->,
  } | order(_createdAt desc)
 
  `;
  const posts = await client.fetch(querySanity, {
    cache: "no-store",
  });
  return posts;
};
export default getTechnologies;
