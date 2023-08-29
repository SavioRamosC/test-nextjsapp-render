import HomeContainer from '@/components/HomeContainer/index';
import { HomeProps } from '@/types/home-props';

export default function HomePage({ posts }: HomeProps) {
  return (
    <HomeContainer>
      {posts.map((post) => (
        <div className="m-auto group" key={post.attributes.slug}>
          <div>
            <h2 className="py-4 flex items-center justify-center group-hover:cursor-pointer ">
              {post.attributes.title}
            </h2>
            <img
              className="h-40 w-64 hover:cursor-pointer border-solid border-opacity-5 border-secondary  hover:border-2"
              src={post.attributes.cover.data.attributes.url}
              alt={post.attributes.cover.data.attributes.name}
            />
          </div>
        </div>
      ))}
    </HomeContainer>
  );
}
