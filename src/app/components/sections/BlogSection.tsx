import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { getPosts, PostData, useOgp } from "@/app/hooks/useQiita";
import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {
  const { postData, isLoading, error } = getPosts();
  const { allOgpData, isLoading: ogpLoading, error: ogpError } = useOgp();

  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">
          Latest Posts
        </h2>
        {isLoading || ogpLoading ? (
          <div className="text-center py-8">Loading posts...</div>
        ) : error ? (
          <div className="text-center py-8 text-red-500">
            Error loading posts
          </div>
        ) : (
          <div className="flex flex-col md:flex-row justify-center items-center gap-16 mx-auto mb-12">
            {(postData || []).map((post: PostData, index: number) => (
              <Link href={post.url} key={index} target="_blank">
                <Card
                  key={index}
                  className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="w-full h-48 relative overflow-hidden bg-gray-100 rounded-t-lg">
                    {allOgpData[index]?.image ? (
                      <Image
                        src={allOgpData[index].image}
                        alt={post.title}
                        width={400}
                        height={200}
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-400">
                        <svg
                          className="w-12 h-12"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <CardTitle className="text-xl text-primary">
                          {post.title}
                        </CardTitle>
                      </div>
                    )}
                  </div>
                  <CardHeader className="flex-grow">
                    <div className="text-sm text-muted-foreground">
                      {post.created_at.split("T")[0]}
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        )}
        <Link
          href="https://qiita.com/FluenceCode"
          target="_blank"
          className="flex justify-center items-center border px-2 py-1 rounded-md w-fit mx-auto"
        >
          View All Posts
        </Link>
      </div>
    </section>
  );
}
