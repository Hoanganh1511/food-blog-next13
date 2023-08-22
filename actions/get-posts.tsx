import { client } from "@/libs/sanity.client";
import { Post } from "@/types";
import { groq } from "next-sanity";
interface Query {
  queryId?: string;
  pageIndex?: number;
}
const ITEMS_PER_PAGE = 3;
const getQueryPosts = async ({ query }: { query?: string }) => {
  const posts = await client.fetch(
    groq`*[_type=="post" && title match $query ]{
    ...,
    author->,
    categories[]->,
    tags[]->,
  } | order(_createdAt desc)
  `,
    {
      query,
      cache: "no-store",
    }
  );
  return {
    posts,
    total: posts.length,
  };
};

const getAllPosts = async (): Promise<Post[]> => {
  const querySanity = groq`*[_type=="post" ]{
    ...,
    author->,
    categories[]->,
    tags[]->,
  } | order(_createdAt desc)
  `;
  const posts = await client.fetch(querySanity, {
    cache: "no-store",
  });
  return posts;
};
const getCategoryPosts = async (): Promise<Post[]> => {
  const querySanity = groq`*[_type=="post" ]{
    ...,
    author->,
    categories[]->,
    tags[]->,
  } | order(_createdAt desc)
  `;
  const posts = await client.fetch(querySanity, {
    cache: "no-store",
  });
  return posts;
};
const getTagPosts = async ({ queryId, pageIndex = 0 }: Query) => {
  const total = await client.fetch(
    groq`*[_type=="post"  &&  references(*[_type=="tag" && title == $queryId ]._id) ]{
    ...,
    author->,
    categories[]->,
    tags[]->,
  } | order(_createdAt desc)
  `,
    {
      queryId,
      cache: "no-store",
    }
  );
  const posts = await client.fetch(
    groq`*[ _type=="post" &&  references(*[_type=="tag" && title == $queryId ]._id) ]  {
    ...,
  
  } | order(_createdAt desc)  [${pageIndex} * ${ITEMS_PER_PAGE}...(${pageIndex} + 1) * ${ITEMS_PER_PAGE}]
  `,
    {
      queryId,
      cache: "no-store",
    }
  );

  return {
    posts: posts,
    total: total.length,
  };
};
export { getQueryPosts, getAllPosts, getCategoryPosts, getTagPosts };