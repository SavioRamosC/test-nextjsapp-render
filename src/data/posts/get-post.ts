import { ApiResponse, Post } from '@/domain/posts/post';

export const getPost = async (slug: string | string[]): Promise<Post[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${process.env.POSTS_URL}&filters[slug][$eq]=${slugString}`;
  const fetchedPosts = await fetch(url);
  const jsonPosts: ApiResponse = await fetchedPosts.json();
  const postsArray: Post[] = jsonPosts.data;

  return postsArray;
};
