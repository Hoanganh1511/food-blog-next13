import { getSearchPosts } from "@/actions/get-searchs";
import { useQuery } from "@tanstack/react-query";

export default function useSearch(query: string) {
  return useQuery({
    queryKey: ["search", query],
    queryFn: getSearchPosts,
  });
}
