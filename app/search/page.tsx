import { getQueryPosts } from "@/actions/get-posts";
import Header from "@/components/Header";
import SearchPostList from "@/components/SearchPostList";
import { Shell } from "@/components/shells/shells";
import Tabs from "@/components/tab/Tabs";
import Container from "@/components/ui/Container";
import React from "react";
interface SearchPageProps {
  searchParams: {
    s: string;
  };
}
const SearchPage: React.FC<SearchPageProps> = async ({
  searchParams: { s },
}) => {
  const { posts, total } = await getQueryPosts({ query: s });
  return (
    <div>
      <Header />

      <Container>
        <div className=" flex gap-[40px]">
          <div className="w-full">
            <Tabs />
          </div>
          <div></div>
        </div>
      </Container>
      <div className="bg-[#fff5e6]">
        <Container>
          <div>
            <h2 className="py-[30px] text-[31px] font-bold">
              {total} results for `{s}`
            </h2>
          </div>
          <Shell as="div">
            <SearchPostList posts={posts} />

            {/* {allPosts.map((post) => {
              return (
                <div key={post._id} className="bg-blue-400">
                  1
                </div>
              );
            })} */}
          </Shell>
        </Container>
      </div>
    </div>
  );
};

export default SearchPage;
