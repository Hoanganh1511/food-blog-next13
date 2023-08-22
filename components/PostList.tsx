"use client";
import qs from "query-string";
import { Post } from "@/types";
import PostCard from "./PostCard";
import NoResults from "@/components/ui/NoResults";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useTransition } from "react";
import CategoryLoading from "@/app/category/[...categoryId]/loading";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Skeleton } from "./ui/Skeleton";

const PostList = ({
  posts,
  queryId,
  pageCount,
}: {
  posts: Post[];
  queryId: string;
  pageCount: number;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = searchParams?.get("pageIndex");
  const [isPending, startTransition] = useTransition();
  const createQueryString = useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString());
      for (const [key, value] of Object.entries(params)) {
        if (value === null) {
          newSearchParams.delete(key);
        } else {
          newSearchParams.set(key, String(value));
        }
      }

      return newSearchParams.toString();
    },
    [searchParams]
  );

  const isBackPage = parseInt(currentPage!) > 0;
  const isNextPage = parseInt(currentPage!) < pageCount - 1;

  const handleBackPage = () => {
    startTransition(() => {
      router.push(
        `${pathname}?${createQueryString({
          pageIndex: parseInt(currentPage!) - 1,
        })}`
      );
    });
  };
  const handleNextPage = () => {
    startTransition(() => {
      router.push(
        `${pathname}?${createQueryString({
          pageIndex: parseInt(currentPage!) + 1,
        })}`
      );
    });
  };
  return (
    <div id="tab-container" className="">
      <div id="tab-body w-full flex flex-1">
        <h1 className="h-[80px] flex items-center justify-center text-[50px] capitalize  text-center font-black dark:text-white">
          {queryId}
        </h1>
        <div>
          {isPending && (
            <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="rounded-sm">
                  <CardContent className="grid gap-[10px] p-4">
                    <Skeleton className="h-[220px] w-full" />
                  </CardContent>
                  <CardFooter className="px-4">
                    <div className="flex w-full flex-col items-start gap-2 ">
                      <Skeleton className="h-[20px] w-full rounded-sm" />
                      <Skeleton className="h-[40px] w-full rounded-sm" />
                      <Skeleton className="h-[10px] w-[80px] rounded-sm" />
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[20px]">
          {posts.length > 0 && !isPending
            ? posts?.map((item: any) => (
                <div key={item._id}>
                  <PostCard post={item} />
                </div>
              ))
            : !isPending && (
                <div className="col-span-full">
                  <NoResults />
                </div>
              )}
        </div>
        <div className="my-[40px] ">
          {posts.length > 0 && (
            <div className="mx-auto mb-[20px] block w-fit ">
              <span className="block text-[18px] ">
                {parseInt(currentPage!) + 1}/{pageCount}
              </span>
            </div>
          )}
          <div className="flex justify-center gap-[40px]">
            <button
              className="px-[40px] py-[15px] bg-[#133d9b] text-[#ffa478] text-[26px] font-bold disabled:opacity-20"
              onClick={handleBackPage}
              disabled={!isBackPage || isPending}
            >
              ← Prev Page
            </button>
            <button
              className="px-[40px] py-[15px] bg-[#133d9b] text-[#ffa478] text-[26px] font-bold disabled:opacity-20"
              onClick={handleNextPage}
              disabled={!isNextPage || isPending}
            >
              next Page →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostList;
