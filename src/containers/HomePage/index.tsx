import { PostArrayProps } from '@/types/post-props';
import { modifyImageSize } from '@/utils/modify-image-size';
import Image from 'next/image';
import Link from 'next/link';
import HomeGrid from './container';

export default function HomePage({ posts }: PostArrayProps) {
  return (
    <HomeGrid>
      {posts.map((post) => (
        <div key={post.attributes.slug} className="relative flex flex-col items-center justify-center">
          <Link className="m-auto group" href={`/post/${post.attributes.slug}`}>
            <h2 className="py-4 text-center md:text-left flex items-center justify-center md:justify-start group-hover:cursor-pointer">
              {post.attributes.title}
            </h2>
            <Image
              className="hover:cursor-pointer transition-transform transform hover:scale-110 hover:rotate-5"
              width={320}
              height={180}
              src={modifyImageSize(post.attributes.cover.data.attributes.url, 320, 180)}
              alt={post.attributes.cover.data.attributes.name}
            />
          </Link>
        </div>
      ))}
    </HomeGrid>
  );
}
