import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
    },
  }).then((res) => res.json());

export const getPosts = () => {
  const { data, error, isLoading } = useSWR(
    "https://qiita.com/api/v2/authenticated_user/items?page=1&per_page=3",
    fetcher
  );

  console.log(data);

  return {
    data,
    error,
    isLoading,
  };
};
