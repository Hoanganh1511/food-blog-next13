"use client";
import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
import PostCard from "./PostCard";
interface CategoryListProps {
  queryId: string;
  tags: any[];
  categories: any[];
}
const CategoryList: React.FC<CategoryListProps> = ({
  queryId,
  tags,
  categories,
}) => {
  const description = categories.find(
    (category) => category.title === queryId
  )!.description;

  return (
    <div className="">
      <h1 className="text-[50px] capitalize mb-[20px] text-center font-black dark:text-white">
        {queryId}
      </h1>
      <p className="text-center mb-[30px]">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tags?.map((category, idx) => {
          return <CategoryCard category={category} key={idx} />;
        })}
      </div>
      {/* <h2 className="text-[40px] capitalize  my-[30px] text-center font-black dark:text-white">
        All {queryId}
      </h2> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allPost.map((post, idx) => {
          return <PostCard post={post} key={idx} />;
        })}
      </div> */}
    </div>
  );
};

export default CategoryList;
