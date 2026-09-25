import "../globals.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";
import {
  APP_DESCRIPTION,
  APP_KEYWORDS,
  APP_NAME,
  PRIMARY_COLOR,
} from "../constants";
import { hydrateAuthState } from "@majapisoftwares/auth/auth.state";
import getQueryClient from "@majapisoftwares/next/api/getQueryClient";
import { DefaultSeo } from "next-seo";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HydrationBoundary, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "@majapisoftwares/auth/AuthProvider";
import Routes from "../routes";
import "@fontsource-variable/inter";
import { NuqsAdapter } from "nuqs/adapters/next/pages";
import type { AppProps } from "next/app";
import type { ReactNode } from "react";
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/inter-tight";
import "@fontsource-variable/fira-code";
import "@fontsource-variable/sora";
import { useTranslation } from "../intl/useTranslation";

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

function Seo() {
  const t = useTranslation();

  return (
    <DefaultSeo
      titleTemplate={`%s - ${APP_NAME}`}
      defaultTitle={APP_NAME}
      description={t(APP_DESCRIPTION)}
      additionalMetaTags={[
        {
          name: "apple-mobile-web-app-title",
          content: APP_NAME,
        },
        {
          name: "keywords",
          content: APP_KEYWORDS,
        },
        {
          name: "msapplication-TileColor",
          content: PRIMARY_COLOR,
        },
        {
          name: "theme-color",
          content: PRIMARY_COLOR,
        },
        {
          name: "viewport",
          content: "initial-scale=1, width=device-width, maximum-scale=1",
        },
      ]}
    />
  );
}

type AppPropsWithLayout = AppProps & {
  Component: AppProps["Component"] & {
    getLayout?: (page: ReactNode) => ReactNode;
  };
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  hydrateAuthState(pageProps.cookies);

  const queryClient = getQueryClient();

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Seo />
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <NuqsAdapter>
            <AuthProvider Routes={Routes}>
              {getLayout(<Component {...pageProps} />)}
            </AuthProvider>
          </NuqsAdapter>
          <ReactQueryDevtools buttonPosition="bottom-left" />
        </HydrationBoundary>
      </QueryClientProvider>
    </>
  );
}
