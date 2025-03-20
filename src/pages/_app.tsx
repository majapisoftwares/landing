import "../globals.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import AppProps from "@italodeandra/ui/bootstrap/AppProps";
import localizedFormat from "dayjs/plugin/localizedFormat";
import setupNProgress from "@italodeandra/ui/bootstrap/nprogress";
import {
  APP_DESCRIPTION,
  APP_KEYWORDS,
  APP_NAME,
  PRIMARY_COLOR,
} from "../constants";
import { hydrateNavigationDrawerState } from "@italodeandra/ui/components/NavigationDrawer";
import { hydrateAuthState } from "@italodeandra/auth/auth.state";
import getQueryClient from "@italodeandra/next/api/getQueryClient";
import { DefaultSeo } from "next-seo";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HydrationBoundary, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "@italodeandra/auth/AuthProvider";
import Routes from "../routes";
import "@fontsource-variable/inter";
import "@italodeandra/ui/bootstrap/suppressConsoleLog";
import "@italodeandra/ui/bootstrap/setupFocusManager";
import { NuqsAdapter } from "nuqs/adapters/next/pages";
import { Dialogs } from "@italodeandra/ui/components/Dialog";
import "@fontsource-variable/dm-sans";
import '@fontsource-variable/inter-tight';

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

setupNProgress(PRIMARY_COLOR);

export default function App({ Component, pageProps }: AppProps) {
  hydrateNavigationDrawerState(pageProps.cookies);
  hydrateAuthState(pageProps.cookies);

  const queryClient = getQueryClient();

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <DefaultSeo
        titleTemplate={`%s - ${APP_NAME}`}
        defaultTitle={APP_NAME}
        description={APP_DESCRIPTION}
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
