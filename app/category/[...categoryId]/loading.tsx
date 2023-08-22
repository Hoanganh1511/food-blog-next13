import { Shell } from "@/components/shells/shells";
import { Skeleton } from "@/components/ui/Skeleton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
export default function CategoryLoading() {
  return (
    <div className="w-full">
      <Shell>
        <div className="h-[80px] flex items-center justify-center">
          <Skeleton className="h-[40px] w-[180px]" />
        </div>
        <div className="flex flex-col ">
          <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {Array.from({ length: 8 }).map((_, i) => (
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
        </div>
      </Shell>
    </div>
  );
}
