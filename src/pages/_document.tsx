// noinspection HtmlUnknownTarget

import { Head, Html, Main, NextScript } from "next/document";
import scrolledScript from "@italodeandra/ui/bootstrap/scrolledScript";

export default function Document() {
  return (
    <Html lang="en" className="dark h-full">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: scrolledScript }} />
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
      <body className="ui-theme-default bg-zinc-900/80 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
