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
      {/* <div className="flex justify-center group">
        <h2 className="py-4 flex items-center justify-center transition-all duration-1000 group-hover:text-secondary">
          haar
        </h2>
        <img
          className="h-40 w-64 border-solid border-secondary hover:cursor-pointer hover:border-2 border-opacity-5"
          src="	https://res.cloudinary.com/dlaaz49my/image/upload/v1692836547/js_simple_1e52b9a734.png"
        />
      </div> */}
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
