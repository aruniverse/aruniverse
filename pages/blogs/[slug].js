import Head from 'next/head';
import Link from 'next/link';
// import { format, parseISO } from "date-fns";
import { allBlogs } from 'contentlayer/generated';
import Container from '../../components/Container';
import { useMDXComponent } from 'next-contentlayer/hooks';

export function getStaticPaths() {
  return {
    paths: allBlogs.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return {
    props: {
      post: allBlogs.find((post) => post.slug === params.slug),
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
      <article className="prose prose-slate mt-4 w-full max-w-none dark:prose-invert prose-a:text-blue-500 hover:prose-a:text-blue-600">
        <MDXComponent />
      </article>
    </Container>
  );
};

export default PostLayout;
