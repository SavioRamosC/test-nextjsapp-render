import HomeContainer from '@/components/HomeContainer/index';
import { HomeProps } from '@/types/home-props';

export default function HomePage({ posts }: HomeProps) {
  return (
    <HomeContainer>
      {posts.map((post) => (
        <div className="m-auto" key={post.attributes.slug}>
          <h2 className="py-4">{post.attributes.title}</h2>
          <div>
            <img
              className="h-40 w-64"
              src={post.attributes.cover.data.attributes.url}
              alt={post.attributes.cover.data.attributes.name}
            />
          </div>
        </div>
      ))}
    </HomeContainer>
  );
}
