import '../../app/globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PostPage from '@/containers/PostPage';
import { countAllPosts } from '@/data/posts/count-all-posts';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { getPost } from '@/data/posts/get-post';
import { PostProps } from '@/types/post-props';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

export default function DynamicPost({ post }: PostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="min-h-screen">
      <Header></Header>
      <PostPage post={post}></PostPage>
      <Footer></Footer>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(`sort=id:desc&pagination[limit]=${numberOfPosts}`);

  const paths = posts.map((post) => ({
    params: {
      slug: post.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<PostProps> = async (ctx) => {
  const slug = ctx.params?.slug as string;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const posts = await getPost(slug);

  if (!posts || posts.length === 0) {
    return {
      notFound: true,
    };
  }

  const post = posts[0];

  return {
    props: { post },
    revalidate: 3600,
  };
};
