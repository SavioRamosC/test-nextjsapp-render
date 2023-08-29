import HomeContainer from '@/components/HomeContainer/index';
import { HomeProps } from '@/types/home-props';

export default function HomePage({ posts }: HomeProps) {
  return (
    <HomeContainer>
      {posts.map((post) => (
        <div className="m-auto hover:border-secondary hover:border-opacity-75" key={post.attributes.slug}>
          <h2 className="py-4 flex items-center justify-center">{post.attributes.title}</h2>
          <div>
            <img
              className="h-40 w-64 hover:cursor-pointer"
              src={post.attributes.cover.data.attributes.url}
              alt={post.attributes.cover.data.attributes.name}
            />
          </div>
        </div>
      ))}
    </HomeContainer>
  );
}
