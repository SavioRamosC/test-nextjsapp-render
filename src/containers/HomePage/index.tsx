import HomeContainer from '@/components/HomeContainer/index';
import { PostArrayProps } from '@/types/post-props';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage({ posts }: PostArrayProps) {
  return (
    <HomeContainer>
      {posts.map((post) => (
        <Link className="m-auto" key={post.attributes.slug} href={`/post/${post.attributes.slug}`}>
          <h2 className="py-4 text-center md:text-left flex items-center justify-center md:justify-start group-hover:cursor-pointer">
            {post.attributes.title}
          </h2>
          <Image
            className="hover:cursor-pointer hover:opacity-50"
            width={320}
            height={180}
            src={post.attributes.cover.data.attributes.url}
            alt={post.attributes.cover.data.attributes.name}
          />
        </Link>
      ))}
    </HomeContainer>
  );
}
