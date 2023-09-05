import PostPageContainer from '@/components/PostPageContainer';
import { PostProps } from '@/types/post-props';
import Image from 'next/image';

export default function PostPage({ post }: PostProps) {
  return (
    <PostPageContainer>
      <div className="m-auto group flex flex-col items-center" key={post.attributes.slug}>
        <Image
          className="mb-4 justify-center hover:cursor-pointer hover:opacity-50"
          width={640}
          height={360}
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
