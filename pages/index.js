import { useEffect } from "react";
import Head from "next/head";
import { marked } from "https://cdn.skypack.dev/marked";
import confetti from "https://cdn.skypack.dev/canvas-confetti";

const Home = ({ content }) => {
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 180,
    });
  }, []);

  return (
    <>
      <Head>
        <title>aruniverse</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

export const getStaticProps = async () => {
  const rawContent = await fetch(
    "https://raw.githubusercontent.com/aruniverse/aruniverse/master/README.md"
  );
  const markdown = await rawContent.text();

  return {
    props: {
      content: marked(markdown),
    },
  };
};

export default Home;