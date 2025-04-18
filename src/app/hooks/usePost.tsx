import { getPosts } from "../api/qiita";

export const usePost = () => {
  const { data, error, isLoading } = getPosts();

  return {
    data,
  };
};
