import "../globals.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import AppProps from "@majapisoftwares/ui/bootstrap/AppProps";
import localizedFormat from "dayjs/plugin/localizedFormat";
import setupNProgress from "@majapisoftwares/ui/bootstrap/nprogress";
import {
  APP_DESCRIPTION,
  APP_KEYWORDS,
  APP_NAME,
  PRIMARY_COLOR,
} from "../constants";
import { hydrateNavigationDrawerState } from "@majapisoftwares/ui/components/NavigationDrawer";
import { hydrateAuthState } from "@majapisoftwares/auth/auth.state";
import getQueryClient from "@majapisoftwares/next/api/getQueryClient";
import { DefaultSeo } from "next-seo";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HydrationBoundary, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "@majapisoftwares/auth/AuthProvider";
import Routes from "../routes";
import "@fontsource-variable/inter";
import "@majapisoftwares/ui/bootstrap/suppressConsoleLog";
import "@majapisoftwares/ui/bootstrap/setupFocusManager";
import { NuqsAdapter } from "nuqs/adapters/next/pages";
import { Dialogs } from "@majapisoftwares/ui/components/Dialog";
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/inter-tight";
import "@fontsource-variable/fira-code";
import { useTranslation } from "../intl/useTranslation";

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

setupNProgress(PRIMARY_COLOR);

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

export default function App({ Component, pageProps }: AppProps) {
  hydrateNavigationDrawerState(pageProps.cookies);
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
              <Dialogs />
              {getLayout(<Component {...pageProps} />)}
            </AuthProvider>
          </NuqsAdapter>
          <ReactQueryDevtools buttonPosition="bottom-left" />
        </HydrationBoundary>
      </QueryClientProvider>
    </>
  );
}
