import { Home } from "../views/Home";
import { GetServerSideProps } from "next";
import { getCookies } from "cookies-next";
import getLayout from "../views/layout/layout";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => ({
  props: {
    cookies: getCookies({ req, res })
  }
});

export default function Page() {
  return (
    <Home />
  );
}

Page.getLayout = getLayout;
