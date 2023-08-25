import { ApiResponse, Post } from '@/domain/posts/post';

export const getAllPosts = async (): Promise<Post[]> => {
  const fetchedPosts = await fetch(process.env.POSTS_URL as string);
  const jsonPosts: ApiResponse = await fetchedPosts.json();
  const postsArray: Post[] = jsonPosts.data;

  return postsArray;
};
