import { PostProps } from '@/types/post-props';
import { modifyImageSize } from '@/utils/modify-image-size';
import Image from 'next/image';

export default function PostPage({ post }: PostProps) {
  return (
    <main className="min-h-screen py-20 px-20">
      <div className="m-auto group flex flex-col items-center" key={post.attributes.slug}>
        <Image
          className="mb-4 justify-center hover:cursor-pointer hover:opacity-50"
          width={640}
          height={360}
          src={modifyImageSize(post.attributes.cover.data.attributes.url, 640, 360)}
          alt={post.attributes.cover.data.attributes.name}
        />
        <div className="text-center">
          <h1 className="text-3xl flex justify-center md:text-4xl lg:text-5xl font-bold py-4">
            {post.attributes.title}
          </h1>
          <div className="text-justify" dangerouslySetInnerHTML={{ __html: post.attributes.content }}></div>
        </div>
      </div>
    </main>
  );
}
