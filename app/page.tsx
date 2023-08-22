import Tabs from "@/components/tab/Tabs";
import Header from "@/components/Header";
import Container from "@/components/ui/Container";
interface CategoryPageProps {
  searchParams: {
    category: any;
  };
}

export const revalidate = 0;
const Home: React.FC<CategoryPageProps> = async ({ searchParams }) => {
  return (
    <>
      <Header />
      <Container>
        <div className=" flex gap-[40px]">
          <div className="w-full">
            <Tabs />
          </div>
        </div>
      </Container>
    </>
  );
};
export default Home;
