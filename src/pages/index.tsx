import Header from '@/components/header/header';
import HomePage from '@/containers/HomePage';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { HomeProps } from '@/types/home-props';
import { GetStaticProps } from 'next';
import '../app/globals.css';

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Header></Header>
      <HomePage posts={posts}></HomePage>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: { posts },
    revalidate: 3600,
  };
};
