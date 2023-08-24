import React from "react";
import NewestCard from "./NewestCard";
import Container from "./ui/Container";
interface NewestListProps {
  posts: any[];
}
const NewestList: React.FC<NewestListProps> = ({ posts }) => {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {posts.map((post, idx) => {
          return <NewestCard key={post._id} post={post} idx={idx + 1} />;
        })}
      </div>
    </Container>
  );
};

export default NewestList;
