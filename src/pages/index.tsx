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
      {/* <div className="flex justify-center border-8 border-secondary">
        <img
          className="h-40 w-64 hover:cursor-pointer"
          src="	https://res.cloudinary.com/dlaaz49my/image/upload/v1692836547/js_simple_1e52b9a734.png"
        />
      </div> */}
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
