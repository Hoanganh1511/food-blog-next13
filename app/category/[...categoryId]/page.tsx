import getCategories from "@/actions/get-categories";
import { ITEMS_PER_PAGE, getTagPosts } from "@/actions/get-posts";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";
import CategoryList from "@/components/CategoryList";
import PostList from "@/components/PostList";
interface TagPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    pageIndex: string;
  };
}

export const revalidate = 0;

const CategoryPage: React.FC<TagPageProps> = async ({
  params: { categoryId },
  searchParams: { pageIndex },
}) => {
  const queryId = categoryId[categoryId.length - 1];
  const showType = categoryId.length === 2 ? "post" : "category";
  const categories = await getCategories();
  const { posts, total } = await getTagPosts({
    queryId: queryId,
    pageIndex: pageIndex ? parseInt(pageIndex) : 0,
  });

  const pageCount = Math.ceil(total / ITEMS_PER_PAGE);
  return (
    <div className="w-full">
      {showType === "category" && (
        <CategoryList
          queryId={queryId}
          categories={categories}
          tags={categories.find((category) => category.title == queryId)!.tags}
        />
      )}
      {showType === "post" && (
        <PostList queryId={queryId} posts={posts} pageCount={pageCount} />
      )}
    </div>
  );
};

export default CategoryPage;
