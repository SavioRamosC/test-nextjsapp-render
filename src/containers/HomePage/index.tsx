import { PostArrayProps } from '@/types/post-props';
import { modifyImageSize } from '@/utils/modify-image-size';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage({ posts }: PostArrayProps) {
  return (
    // <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 min-h-screen py-20 px-20">
    <main className="grid gap-4 md:grid-cols-2 grid-cols-3 py-20 px-20">
      {posts.map((post) => (
        <Link className="m-auto" key={post.attributes.slug} href={`/post/${post.attributes.slug}`}>
          <h2 className="py-4 text-center md:text-left flex items-center justify-center md:justify-start">
            {post.attributes.title}
          </h2>
          <Image
            width={320}
            height={180}
            src={modifyImageSize(post.attributes.cover.data.attributes.url, 320, 180)}
            alt={post.attributes.cover.data.attributes.name}
          />
        </Link>
      ))}
    </main>
  );
}
