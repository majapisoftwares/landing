// noinspection HtmlUnknownTarget

import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="dark h-full">
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/icons/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/icons/site.webmanifest" />
      </Head>
      <body className="bg-[#000003] antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
