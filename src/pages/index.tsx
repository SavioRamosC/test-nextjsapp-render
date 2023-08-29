import Header from '@/components/Header/index';
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
      {/* <img
        className="h-40 w-64 object-cover"
        src="	https://res.cloudinary.com/dlaaz49my/image/upload/v1692836547/js_simple_1e52b9a734.png"
      /> */}
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
