import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta content="" name="google-site-verification" />
      </Head>
      <body className="bg-white dark:bg-black text-black dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
