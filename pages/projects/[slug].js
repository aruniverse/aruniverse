import Head from 'next/head';
import { allProjects } from 'contentlayer/generated';
import Container from '../../components/Container';
import { useMDXComponent } from 'next-contentlayer/hooks';

export function getStaticPaths() {
  return {
    paths: allProjects.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return {
    props: {
      post: allProjects.find((post) => post.slug === params.slug),
    },
  };
}

const PostLayout = ({ post }) => {
  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <Container>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="prose prose-slate w-full max-w-none prose-a:text-blue-500 hover:prose-a:text-blue-600 dark:prose-invert">
        <div className="flex">
          <h1>{post.title}</h1>
          <h4 className="flex flex-auto justify-end sm:flex-1">
            {new Intl.DateTimeFormat(undefined, {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            }).format(new Date(post.date))}
          </h4>
        </div>
        <MDXComponent />
      </article>
    </Container>
  );
};

export default PostLayout;
