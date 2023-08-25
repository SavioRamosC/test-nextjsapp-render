import { HomeProps } from '@/types/home-props';

export default function HomePage({ posts }: HomeProps) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.attributes.slug}>
          <h2 className="bg-red-500">{post.attributes.title}</h2>
          <img src={post.attributes.cover.data.attributes.url} alt={post.attributes.cover.data.attributes.name} />
        </div>
      ))}
    </div>
  );
}
