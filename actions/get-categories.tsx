import { client } from "@/libs/sanity.client";
import { Category } from "@/types";
import { groq } from "next-sanity";
interface Query {
  category?: string;
}
const getCategories = async (): Promise<Category[]> => {
  const querySanity = groq`*[_type=="category"]{
    ...,
    description,
    thumbnail,
    author->,
    categories[]->,
    tags[]->
  } | order(_createdAt desc)
  `;
  const categories = await client.fetch(querySanity, {
    cache: "no-store",
  });
  return categories;
};
export default getCategories;
