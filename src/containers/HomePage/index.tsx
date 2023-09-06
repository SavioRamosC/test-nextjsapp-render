import HomeContainer from '@/components/HomeContainer/index';
import { PostArrayProps } from '@/types/post-props';
import { modifyImageSize } from '@/utils/modify-image-size';
import Link from 'next/link';

export default function HomePage({ posts }: PostArrayProps) {
  return (
    <HomeContainer>
      {posts.map((post) => (
        <Link className="m-auto group" key={post.attributes.slug} href={`/post/${post.attributes.slug}`}>
          <div className="relative">
            <h2 className="py-4 text-center md:text-left flex items-center justify-center md:justify-start group-hover:cursor-pointer">
              {post.attributes.title}
            </h2>
            <img
              className="hover:cursor-pointer transition-transform transform hover:scale-110 hover:rotate-5"
              width={320}
              height={180}
              src={modifyImageSize(post.attributes.cover.data.attributes.url, 320, 180)}
              alt={post.attributes.cover.data.attributes.name}
            />
          </div>
        </Link>
      ))}
    </HomeContainer>
  );
}
