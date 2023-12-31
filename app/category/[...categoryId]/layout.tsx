import "../../globals.css";
import type { Metadata } from "next";
import MediumHeader from "@/components/MediumHeader";
import Container from "@/components/ui/Container";
import Sidebar from "@/components/Sidebar";
import getCategories from "@/actions/get-categories";
import { getAllPosts } from "@/actions/get-posts";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();
  const allPosts = await getAllPosts();
  return (
    <div className="">
      <MediumHeader />
      <div className="mx-auto w-full px-[20px] sm:max-w-[1420px]">
        <div className="flex py-[60px]">
          <Sidebar categories={categories} allPosts={allPosts} />
          <div className="sm:pl-[40px] w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
