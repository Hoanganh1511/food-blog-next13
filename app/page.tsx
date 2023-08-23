import Tabs from "@/components/tab/Tabs";
import Header from "@/components/Header";
import Container from "@/components/ui/Container";
import { getAllPosts } from "@/actions/get-posts";
import NewestList from "@/components/NewestList";
import { FiSearch } from "react-icons/fi";
import InputSearchHome from "@/components/ui/input-search-home";
import Link from "next/link";
import PopularThisWeekList from "@/components/PopularThisWeekList";
import Tiles from "@/components/Tiles";
interface CategoryPageProps {
  searchParams: {
    category: any;
  };
}

export const revalidate = 0;
const Home: React.FC<CategoryPageProps> = async ({ searchParams }) => {
  const posts = await getAllPosts();
  return (
    <>
      <Header />
      <div className="flex flex-col gap-[40px]">
        <Tabs />
        <NewestList posts={posts} />
        <InputSearchHome />
        <PopularThisWeekList posts={posts} />
        <Tiles posts={posts} />
      </div>
    </>
  );
};
export default Home;
