import useSWR from "swr";
export interface PostData {
  title: string;
  created_at: string;
  url: string;
  tags: string[];
}

const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
    },
  }).then((res) => res.json());

export const getPosts = (): {
  postData: PostData[];
  error: any;
  isLoading: boolean;
} => {
  const {
    data: postData,
    error,
    isLoading,
  } = useSWR(
    "https://qiita.com/api/v2/authenticated_user/items?page=1&per_page=3",
    fetcher
  );

  return {
    postData,
    error,
    isLoading,
  };
};
