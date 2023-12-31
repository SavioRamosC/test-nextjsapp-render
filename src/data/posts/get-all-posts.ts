import { ApiResponse, Post } from '@/domain/posts/post';

export const getAllPosts = async (query = ''): Promise<Post[]> => {
  const url = `${process.env.POSTS_URL}&${query}`;
  const fetchedPosts = await fetch(url);
  const jsonPosts: ApiResponse = await fetchedPosts.json();
  const postsArray: Post[] = jsonPosts.data;

  return postsArray;
};
