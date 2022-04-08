import Link from 'next/link';
import Container from '../components/Container';
import { allBlogs } from 'contentlayer/generated';

export function getStaticProps() {
  const posts = allBlogs
    .map(({ slug, title, date }) => ({ slug, title, date }))
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return { props: { posts } };
}

const Blog = (post) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg">
        <Link href={`/blogs/${post.slug}`}>
          <a className="text-blue-700 hover:text-blue-900">{post.title}</a>
        </Link>
      </h2>
    </div>
  );
};

const Blogs = ({ posts }) => {
  return (
    <Container>
      <div>Blogs</div>
      {posts.map((post, id) => (
        <Blog key={id} {...post} />
      ))}
    </Container>
  );
};

export default Blogs;
