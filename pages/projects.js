import Link from 'next/link';
import Container from '../components/Container';
import { allProjects } from 'contentlayer/generated';

export function getStaticProps() {
  const posts = allProjects
    .map(({ slug, title, date }) => ({ slug, title, date }))
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return { props: { posts } };
}

const Project = (post) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg">
        <Link href={`/projects/${post.slug}`}>
          <a className="text-blue-700 hover:text-blue-900">{post.title}</a>
        </Link>
      </h2>
    </div>
  );
};

const Projects = ({ posts }) => {
  return (
    <Container>
      <h1 className="text-xl">Projects</h1>
      <br />
      {posts.map((post, id) => (
        <Project key={id} {...post} />
      ))}
    </Container>
  );
};

export default Projects;
