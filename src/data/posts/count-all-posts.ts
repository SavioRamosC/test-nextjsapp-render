import { ApiResponse } from '@/domain/posts/post';

export const countAllPosts = async (query = ''): Promise<string> => {
  const url = `${process.env.POSTS_URL}&${query}`;
  const fetchedPosts = await fetch(url);
  const jsonPosts: ApiResponse = await fetchedPosts.json();
  const count = JSON.stringify(jsonPosts.meta.pagination.total);

  return count;
};
