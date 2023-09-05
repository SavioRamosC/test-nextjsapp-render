import PostPageContainer from '@/components/PostPageContainer';
import { PostProps } from '@/types/post-props';
import Image from 'next/image';

export default function PostPage({ post }: PostProps) {
  return (
    <PostPageContainer>
      <div className="m-auto group flex flex-col" key={post.attributes.slug}>
        <Image
          className="h-56 w-96 mx-auto mb-4 hover:cursor-pointer border-solid border-opacity-5 border-secondary hover:border-2"
          width={320}
          height={180}
          src={post.attributes.cover.data.attributes.url}
          alt={post.attributes.cover.data.attributes.name}
        />
        <div className="text-center">
          <h1 className="text-3xl flex justify-center md:text-4xl lg:text-5xl font-bold py-4">
            {post.attributes.title}
          </h1>
          <p className="text-justify">{post.attributes.content}</p>
        </div>
      </div>
    </PostPageContainer>
  );
}
