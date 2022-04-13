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
    <li className="mb-6">
      <Link href={`/projects/${post.slug}`}>
        <a className="text-xl text-blue-700 hover:text-blue-900">
          {post.title}
        </a>
      </Link>
      <div className="flex flex-1 justify-end">
        {new Intl.DateTimeFormat().format(new Date(post.date))}
      </div>
    </li>
  );
};

const Projects = ({ posts }) => {
  return (
    <Container>
      <h1 className="mb-2 text-3xl font-bold md:text-4xl">Projects</h1>
      <br />
      {posts.map((post, id) => (
        <Project key={id} {...post} />
      ))}
    </Container>
  );
};

export default Projects;
