import "normalize.css/normalize.css";
import "./global.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Bartosz Polnik | Fullstack Developer" />
        <meta property="og:site_name" content="Bartosz Polnik website" />
        <meta name="author" content="Bartosz Polnik" />
        <meta
          name="description"
          content="Fullstack developer focused on building amazing, useful and easy to use products"
        />
        <link rel="shortcut icon" href="/static/favicon.svg" type="image/x-icon" />
        <link rel="icon" href="/static/favicon.svg" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
