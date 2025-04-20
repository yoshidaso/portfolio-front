import { getPosts } from "../api/qiita";

export const usePost = () => {
  const { postData, error, isLoading } = getPosts();

  return {
    postData,
    error,
    isLoading,
  };
};
