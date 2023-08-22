import React from "react";
import Image from "next/image";
import Link from "next/link";
import urlFor from "@/libs/urlFor";
const PortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image src={urlFor(value).url()} alt="Blog Post Image" fill />
    ),
    callToAction: ({ value, isInline }: any) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="text-[25px] ml-10 py-5 list-disc space-y-5 dark:text-white/90">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="text-[25px] ml-10 py-5 list-decimal space-y-5 dark:text-white/90">
        {children}
      </ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold dark:text-white/90">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-8 font-bold dark:text-white/90">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl pb-5 pt-10 font-bold dark:text-white/90">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-4 font-bold text-black/80 dark:text-white/90">
        {children}
      </h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="text-[22px] text-black/70 dark:text-white/90 border-l-[#F7AB0A] border-l-4 pl-5 py-5 my-5">
        <q> {children}</q>
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="text-[25px] dark:text-white/90">{children}</p>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#F7AB0A] hover:decoration-black dark:text-white/90"
        >
          {children}
        </Link>
      );
    },
  },
};
export default PortableTextComponents;
