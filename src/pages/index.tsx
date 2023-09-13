import '../app/globals.css';
import Header from '@/components/Header/index';
import HomePage from '@/containers/HomePage';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { GetStaticProps } from 'next';
import { PostArrayProps } from '@/types/post-props';
import Footer from '@/components/Footer';

export default function Home({ posts }: PostArrayProps) {
  return (
    <div className="min-h-screen">
      <Header></Header>
      <HomePage posts={posts}></HomePage>
      <Footer></Footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts('sort=id:desc');

  return {
    props: { posts },
    revalidate: 3600,
  };
};
