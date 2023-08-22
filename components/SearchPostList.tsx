import { Post } from "@/types";
import React from "react";
import SearchPostCard from "./SearchPostCard";
interface SearchPostListProps {
  posts: Post[];
}
const SearchPostList: React.FC<SearchPostListProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {posts.map((post) => {
        return <SearchPostCard key={post._id} post={post} />;
      })}
    </div>
  );
};

export default SearchPostList;
