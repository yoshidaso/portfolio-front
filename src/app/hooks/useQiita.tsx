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

// 複数URLに対するフェッチャー
const multipleFetcher = (urls: string[]) => {
  if (!urls || urls.length === 0) return Promise.resolve([]);
  return Promise.all(urls.map((url) => fetcher(url)));
};

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

export const useOgp = () => {
  const { postData, isLoading, error } = getPosts();

  // 全ての投稿のOGPデータを取得
  const urls = postData?.map((post) => post.url) || [];

  // 各投稿のOGP取得用URL配列を作成
  const ogpUrls =
    urls.length > 0
      ? urls.map((url) => `/api/ogp?url=${encodeURIComponent(url)}`)
      : [];

  // 常にフックを呼び出す（URLがnullの場合、SWRは自動的にリクエストを送信しない）
  const {
    data,
    error: ogpError,
    isLoading: ogpLoading,
  } = useSWR(ogpUrls.length > 0 ? ogpUrls : null, multipleFetcher);

  // データの有無やローディング状態を返す
  return {
    ogpData: data && data[0] ? data[0] : {},
    allOgpData: data || [],
    isLoading: isLoading || ogpLoading || urls.length === 0,
    error: error || ogpError,
  };
};
