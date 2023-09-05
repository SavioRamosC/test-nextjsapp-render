import HomeContainer from '@/components/HomeContainer/index';
import { PostArrayProps } from '@/types/post-props';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage({ posts }: PostArrayProps) {
  return (
    <HomeContainer>
      {posts.map((post) => (
        <div className="m-auto group" key={post.attributes.slug}>
          <Link href={`/post/${post.attributes.slug}`}>
            <div>
              <h2 className="py-4 text-center md:text-left flex items-center justify-center md:justify-start group-hover:cursor-pointer">
                {post.attributes.title}
              </h2>
              <Image
                className="h-40 w-full hover:cursor-pointer border-solid border-opacity-5 border-secondary hover:border-2"
                width={320}
                height={180}
                src={post.attributes.cover.data.attributes.url}
                alt={post.attributes.cover.data.attributes.name}
              />
            </div>
          </Link>
        </div>
      ))}
    </HomeContainer>
  );
}
