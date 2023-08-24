import React from "react";
import Container from "./ui/Container";
import { Post } from "@/types";
import PopularThisWeekPost from "./PopularThisWeekPost";
interface PopularThisWeekListProps {
  posts: Post[];
}
const PopularThisWeekList: React.FC<PopularThisWeekListProps> = ({ posts }) => {
  return (
    <div className="bg-gray-100/10">
      <Container>
        <h2 className="py-[30px] font-bold text-[34px]">
          Most Popular Post This Week
        </h2>
        <div className="grid grid-cols-4 gap-[15px]">
          {posts.map((post) => {
            return (
              <div key={post._id} className="col-span-4 lg:col-span-3">
                <PopularThisWeekPost post={post} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default PopularThisWeekList;
