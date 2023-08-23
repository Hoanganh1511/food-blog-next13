import React from "react";
import NewestCard from "./NewestCard";
import Container from "./ui/Container";
interface NewestListProps {
  posts: any[];
}
const NewestList: React.FC<NewestListProps> = ({ posts }) => {
  return (
    <Container>
      <div className="grid gap-8 grid-cols-3">
        {posts.map((post, idx) => {
          return <NewestCard key={post._id} post={post} idx={idx + 1} />;
        })}
      </div>
    </Container>
  );
};

export default NewestList;
