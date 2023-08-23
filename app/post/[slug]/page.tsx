import React from "react";
import Image from "next/image";
import Avatar from "@/public/images/avatar.webp";
import { groq } from "next-sanity";
import { client } from "@/libs/sanity.client";
import { Post } from "@/types";
import urlFor from "@/libs/urlFor";
import { PortableText } from "@portabletext/react";
import RichTextComponent from "@/components/ui/RichTextComponent";
import Container from "@/components/ui/Container";
interface PostPageProps {
  params: {
    slug: string;
  };
}
export const revalidate = 0;

export async function generateStaticParams() {
  const query = groq`
  *[_type=="post"]{
    slug
  }
  `;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

const Post: React.FC<PostPageProps> = async ({ params: { slug } }) => {
  const query = groq`
  *[_type=="post" && slug.current == $slug][0]
  {
    ...,
    author->,
    categories[]->
  }

  `;
  const post: Post = await client.fetch(query, {
    slug,
    cache: "no-store",
  });
  return (
    <Container>
      <section>
        <div className="w-full py-[60px]">
          <div className="flex gap-[20px] text-gray-500/80 dark:text-white/80 mb-[20px]">
            <p>
              {new Date(post._createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p>10 Mins read</p>
          </div>
          <h2 className="text-[56px] font-bold dark:text-white">
            {post.title}
          </h2>

          <div className="mt-[8px] flex gap-[12px] items-center capitalize">
            <Image src={Avatar} alt="author-img" width={34} height={34} />
            <span className="font-medium text-gray-500/90 dark:text-white/80">
              admin Tuan Anh
            </span>
          </div>
          <div className="">
            <div className="my-[30px] w-full min-h-[500px] max-h-[600px] relative ">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
            <div>
              <PortableText value={post.body} components={RichTextComponent} />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Post;
