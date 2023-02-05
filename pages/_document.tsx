import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Bartosz Polnik | Fullstack Developer" />
        <meta property="og:site_name" content="Bartosz Polnik website" />
        <meta name="author" content="Bartosz Polnik" />
        <meta name="description"
              content="Fullstack developer focused on building amazing, useful and easy to use products" />
        <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  )
}
